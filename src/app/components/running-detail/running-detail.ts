import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-running-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './running-detail.html',
  styleUrl: './running-detail.css',
})
export class RunningDetail {
  running: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.running = this.ps.getRunningById(id);
  }
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }
  addShoesToCart() {
    if (this.running) {
      this.cart.add(this.running, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.running) {
      this.cart.addToFavorite(this.running, this.qty, this.selectedSize);
    }
  }
}
