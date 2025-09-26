import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainServices } from '../../services/main-services';
import { Loginservice } from '../../auth/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orders: any;
  grandTotal: number = 0;
  customerSnap: any;
  constructor(
    public cartService: CartService,
    private telegram: MainServices,
    public session: Loginservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orders = this.cartService.getOrderHistory();
    this.grandTotal = this.cartService.getAllOrdersTotal();
  }
  checkoutData = {
    name: '',
    address: '',
    phone: '',
    paymentMethod: '',
  };

  submitCheckout() {
    if (!this.checkoutData.paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    let orderSummary = {
      customer: this.checkoutData,
      orders: this.orders,
      grandTotal: this.grandTotal,
    };
    this.customerSnap = orderSummary;

    console.log('Checkout Submitted:', this.customerSnap);
    // You can now send this to your service
  }
  sendTele() {
    if (this.orders) {
      alert('Submitted Orders');
      return;
    }

    // Format customer info
    const customerMsg =
      `🙍 -----Customer Info-----\n` +
      `👤 Name: ${this.customerSnap.customer.name}\n` +
      `📍 Address: ${this.customerSnap.customer.address}\n` +
      `📞 Phone: ${this.customerSnap.customer.phone}\n` +
      `💳 Payment: ${this.customerSnap.customer.paymentMethod}`;

    // Send customer info first
    this.telegram.sendMessage(customerMsg).subscribe({
      next: (data) => console.log('Customer sent:', data),
      error: (err) => console.error('Telegram Error:', err),
    });

    // Send each product as a photo with caption
    this.orders.forEach((order: any) => {
      order.items.forEach((item: any) => {
        const caption =
          `📦 *Order #${order.orderId}*\n` +
          `🗓 ${new Date(order.date).toLocaleString()}\n` +
          `🛒 ${item.name}\n` +
          `👕 Size: ${item.size} | Qty: ${item.qty}\n` +
          `💲 Price: $${item.price}\n` +
          `💰 *Order Total:* $${order.total}`;

        this.telegram.sendPhoto(item.image, caption).subscribe({
          next: (data) => console.log('Photo sent:', data),
          error: (err) => console.error('Telegram Error:', err),
        });
      });
    });

    // Send grand total last
    const finalMessage = `-----Order List-----
    📊Grand Total for All Orders:$${this.grandTotal}`;
    this.telegram.sendMessage(finalMessage).subscribe();
    this.cartService.clearOrderHistory();
  }
  logout() {
    this.session.logout();
    console.log('User after logout:', sessionStorage.getItem('user')); // should be null
    this.router.navigate(['/login']);
  }
}
