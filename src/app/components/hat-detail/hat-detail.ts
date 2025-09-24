import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AcServices } from '../../services/ac-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hat-detail',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './hat-detail.html',
  styleUrl: './hat-detail.css',
})
export class HatDetail {
  hat: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }

  constructor(private route: ActivatedRoute, private ps: AcServices) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.hat = this.ps.getHatById(id);
  }
  addHatsToCart() {
    if (this.hat) {
      this.cart.add(this.hat, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.hat) {
      this.cart.addToFavorite(this.hat, this.qty, this.selectedSize);
    }
  }
}
