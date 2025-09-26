import { routes } from './../../app.routes';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainServices } from '../../services/main-services';
import { Loginservice } from '../../auth/loginservice';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule, DatePipe, RouterLink],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orders: any[] = [];
  grandTotal: number = 0;

  // ✅ Snapshot after checkout
  customerSnap: {
    customer: {
      name: string;
      address: string;
      phone: string;
      paymentMethod: string;
    };
    orders: any[];
    grandTotal: number;
  } | null = null;

  // ✅ Two-way binded form data
  checkoutData = {
    name: '',
    address: '',
    phone: '',
    paymentMethod: '',
  };
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

  submitCheckout() {
    console.log('CheckoutData before submit:', this.checkoutData);

    if (
      !this.checkoutData.name ||
      !this.checkoutData.address ||
      !this.checkoutData.phone
    ) {
      alert('Please fill in all customer details.');
      return;
    }

    if (!this.checkoutData.paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    this.customerSnap = {
      customer: { ...this.checkoutData }, // clone to avoid mutation
      orders: [...this.orders],
      grandTotal: this.grandTotal,
    };

    console.log('Checkout Submitted:', this.customerSnap);
    this.sendTele();
  }

  sendTele() {
    if (!this.orders || this.orders.length === 0) {
      alert('No orders to submit');
      return;
    }

    if (!this.customerSnap || !this.customerSnap.customer) {
      return;
    }
    const finalMessage = `-----Order List-----\n📊 Grand Total for All Orders: $${this.grandTotal}`;
    this.telegram.sendMessage(finalMessage).subscribe({
      next: () => console.log('✅ Final total sent'),
    });
    const c = this.customerSnap.customer;

    const customerMsg =
      `🙍 -----Customer Info-----\n` +
      `👤 Name: ${c.name}\n` +
      `📍 Address: ${c.address}\n` +
      `📞 Phone: ${c.phone}\n` +
      `💳 Payment: ${c.paymentMethod}`;

    this.telegram.sendMessage(customerMsg).subscribe({
      next: (data) => console.log('✅ Customer sent:', data),
      error: (err) => console.error('❌ Telegram Error:', err),
    });

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
          next: (data) => console.log('✅ Photo sent:', data),
          error: (err) => console.error('❌ Telegram Error:', err),
        });
      });
    });
    this.alertOrder();
    // ✅ clear after sending
    this.cartService.clearOrderHistory();
    this.orders = this.cartService.getOrderHistory();
    this.grandTotal = this.cartService.getAllOrdersTotal();
    this.checkoutData = { name: '', address: '', phone: '', paymentMethod: '' };
    this.customerSnap = null;
  }

  logout() {
    this.session.logout();
    console.log('User after logout:', sessionStorage.getItem('user'));
    this.router.navigate(['/login']);
  }
  alertOrder() {
    let timerInterval: any;

    Swal.fire({
      title: 'Your Orders!',
      html: 'please Wait in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timerEl = Swal.getPopup()?.querySelector('b');
        timerInterval = setInterval(() => {
          if (timerEl) {
            timerEl.textContent = `${Swal.getTimerLeft()}`;
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('✅ Closed by the timer');
      }
    });
  }
}
