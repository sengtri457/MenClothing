import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  orders: any;
  grandTotal: number = 0;
  constructor(public cartService: CartService) {}

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

    const orderSummary = {
      customer: this.checkoutData,
      orders: this.orders,
      grandTotal: this.grandTotal,
    };

    console.log('Checkout Submitted:', orderSummary);
    // You can now send this to your service
  }
}
