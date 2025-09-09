import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isCollapsed = true;

  navBar = inject(ProductService);
  isNav: boolean = false;
  ngOnInit() {
    // set initial state if page is already scrolled
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const sc = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isNav = sc > 40;
    console.log('scroll:', sc, 'isNav:', this.isNav);
  }
}
