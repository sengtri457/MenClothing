import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [NgIf, NgFor, RouterLink, CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  product: any;
  shoes: any;
  qty = 1;
  selectedSize: any;

  constructor(
    private route: ActivatedRoute,
    private ps: ProductService,
    private cart: CartService
  ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.product = this.ps.getById(id);
    this.shoes = this.ps.getByShoesId(id);
  }
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }
  addToCart() {
    if (this.product) {
      this.cart.add(this.product, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.product) {
      this.cart.addToFavorite(this.product, this.qty, this.selectedSize);
    }
  }
}
