import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shoes-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './shoes-detail.html',
  styleUrl: './shoes-detail.css',
})
export class ShoesDetail {
  shoes: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.shoes = this.ps.getByShoesId(id);
  }
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }
  addShoesToCart() {
    if (this.shoes) {
      this.cart.add(this.shoes, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.shoes) {
      this.cart.addToFavorite(this.shoes, this.qty, this.selectedSize);
    }
  }
}
