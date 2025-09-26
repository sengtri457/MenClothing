import { Loginservice } from './../../auth/loginservice';
import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { MainServices } from '../../services/main-services';
import { log } from 'console';
import { sign } from 'crypto';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isCollapsed = true;

  navBar = inject(ProductService);
  telegram = inject(MainServices);
  login = inject(Loginservice);
  router = inject(Router);
  cart = this.navBar.cart;
  isNav: boolean = false;
  cartItem = inject(CartService);
  searchTerm: string = ''; // bound to your input
  searchRouter: string = '';
  ngOnInit() {
    // set initial state if page is already scrolled
    this.checkScroll();
    this.checUser();
    this.checkLabelLogout();
  }

  searchItemsRoute() {
    this.navBar.runSearch(this.searchRouter);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/', this.searchTerm.toLowerCase()]);
    }
    this.searchTerm = '';
  }

  private checkScroll() {
    const sc = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isNav = sc > 40;
    console.log('scroll:', sc, 'isNav:', this.isNav);
  }

  checkOut() {
    if (this.login.isLoggedIn()) {
      this.cartItem.checkOut();
      this.router.navigateByUrl('orders');
    } else {
      alert('login First ');
      this.router.navigateByUrl('login');
    }
  }
  userAvailable = signal('Guest');
  checUser() {
    if (this.login.isLoggedIn()) {
      this.userAvailable.set('User');
    } else {
      this.userAvailable();
    }
  }
  sendTele() {
    this.telegram.sendMessage('Hello').subscribe((data) => {
      console.log(data);
    });
  }
  checkLabelLogout(): string {
    // return the route depending on login/logout state
    return this.login.isLoggedIn() ? '/logout' : '/login';
  }

  lebelLogin(): string {
    return this.login.isLoggedIn() ? 'Logout' : 'Login';
  }

  onLogoutClick() {
    if (this.login.isLoggedIn()) {
      this.login.logout();
    }
  }
}
