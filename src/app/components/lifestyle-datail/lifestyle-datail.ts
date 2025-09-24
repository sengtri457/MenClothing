import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifestyle-datail',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './lifestyle-datail.html',
  styleUrl: './lifestyle-datail.css',
})
export class LifestyleDatail {
  lifestyle: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }

  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.lifestyle = this.ps.getLifeStyleById(id);
  }
  addShoesToCart() {
    if (this.lifestyle) {
      this.cart.add(this.lifestyle, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.lifestyle) {
      this.cart.addToFavorite(this.lifestyle, this.qty, this.selectedSize);
    }
  }
}
