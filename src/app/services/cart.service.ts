import { Shoes } from './../models/product.model';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CartService {
  router = inject(Router);

  public items: { product: Product; qty: number; selectedSize: string }[] = [];
  public shoesItems: { Shoes: Shoes; qty: number; selectedSize: string }[] = [];
  public Fav: { product: Product; qty: number; selectedSize: string }[] = [];
  // cart.service.ts
  // ...existing code...
  add(product: Product, qty = 1, selectedSize = '') {
    debugger;
    const found = this.items.find(
      (i) => i.product.id === product.id && i.selectedSize === selectedSize
    );
    if (!found) {
      this.items.push({ product, qty, selectedSize });
    } else {
      found.qty += qty;
    }
  }
  addShoes(product: Shoes, qty = 1, selectedSize = '') {
    debugger;
    const found = this.shoesItems.find((i) => i.Shoes.id === product.id);
    if (!found) {
      this.shoesItems.push({ Shoes: product, qty, selectedSize });
    } else {
      found.qty += qty;
      found.selectedSize = selectedSize;
    }
  }
  // ...existing code...

  remove(productId: number) {
    this.items = this.items.filter((i) => i.product.id !== productId);
  }
  removeFromFavorites(index: number) {
    this.Fav.splice(index, 1);
  }
  clear() {
    this.items = [];
  }
  AddToCart(index: number) {
    const item = this.Fav[index];
    if (item) {
      this.Fav.push(item);
    }
  }
  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((s, i) => s + i.product.price * i.qty, 0);
  }

  addToFavorite(product: Product, qty = 1, selectedSize = '') {
    debugger;
    const found = this.Fav.find(
      (i) => i.product.id === product.id && i.selectedSize === selectedSize
    );
    if (!found) {
      this.Fav.push({ product, qty, selectedSize });
    } else {
      found.qty += qty;
    }
  }
  // --- Checkout & Order History ---
  checkOut() {
    if (this.items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const checkoutData = {
      orderId: Date.now(), // unique ID
      items: this.items.map((item) => ({
        productId: item.product.id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        qty: item.qty,
        size: item.selectedSize,
        category: item.product.category,
      })),
      total: this.getTotal(),
      date: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    orders.push(checkoutData);

    localStorage.setItem('orderHistory', JSON.stringify(orders));

    this.items = []; // clear cart
    this.saveCart();

    alert('Checkout successful! Order saved to history.');
  }

  getOrderHistory() {
    return JSON.parse(localStorage.getItem('orderHistory') || '[]');
  }

  // --- Persistence ---
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  loadCart() {
    const data = localStorage.getItem('cart');
    this.items = data ? JSON.parse(data) : [];
  }
  getAllOrdersTotal() {
    const orders = this.getOrderHistory();
    return orders.reduce((acc: number, order: any) => acc + order.total, 0);
  }
}
