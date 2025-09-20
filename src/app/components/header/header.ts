import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isCollapsed = true;

  navBar = inject(ProductService);
  cart = this.navBar.cart;
  isNav: boolean = false;
  cartItem = inject(CartService);
  searchTerm: string = ''; // bound to your input
  searchRouter: string = '';
  ngOnInit() {
    // set initial state if page is already scrolled
    this.checkScroll();
  }

  searchItemsRoute() {
    this.navBar.runSearch(this.searchRouter);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  filteredItems: any[] = [];

  searchItems() {
    this.filteredItems = this.navBar.searchItems(this.searchTerm);
  }

  private checkScroll() {
    const sc = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isNav = sc > 40;
    console.log('scroll:', sc, 'isNav:', this.isNav);
  }
}
