import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensection',
  imports: [
    ProductCardComponent,
    CategoryPillsComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './mensection.html',
  styleUrl: './mensection.css',
})
export class Mensection implements OnInit {
  ps = inject(ProductService);
  products = this.ps.getAll();
  categories = this.ps.getCategories();
  active = 'All';
  isCollapsed = true;
  searchTerm: string = '';
  navBar = inject(ProductService);
  cart = this.navBar.cart;
  isNav: boolean = false;
  cartItem = inject(CartService);
  filteredItems: any[] = [];

  ngOnInit(): void {
    this.filteredItems = this.products;
    this.ps.filterProduct;
  }
  searchItems() {
    this.filteredItems = this.navBar.searchItems(this.searchTerm);
  }
  setCategory(c: string) {
    this.active = c;
    this.products = this.ps.getByCategory(c);
  }
}
