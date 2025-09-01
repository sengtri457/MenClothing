import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: { product: Product, qty: number }[] = [];

  add(product: Product, qty = 1) {
    const found = this.items.find(i => i.product.id === product.id);
    if (found) found.qty += qty; else this.items.push({ product, qty });
  }

  remove(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  clear() { this.items = []; }

  getItems() { return this.items; }

  getTotal() { return this.items.reduce((s, i) => s + i.product.price * i.qty, 0); }
}
