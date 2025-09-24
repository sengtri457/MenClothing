import { Shoes } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
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
}
