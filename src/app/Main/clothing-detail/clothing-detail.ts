import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MainServices } from '../../services/main-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clothing-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './clothing-detail.html',
  styleUrl: './clothing-detail.css',
})
export class ClothingDetail {
  clothing: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }

  constructor(private route: ActivatedRoute, private ps: MainServices) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.clothing = this.ps.getClothingById(id);
  }
  addClothingsToCart() {
    if (this.clothing) {
      this.cart.add(this.clothing, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.clothing) {
      this.cart.addToFavorite(this.clothing, this.qty, this.selectedSize);
    }
  }
}
