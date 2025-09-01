import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  product: any;
  qty = 1;

  constructor(
    private route: ActivatedRoute,
    private ps: ProductService,
    private cart: CartService
  ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.product = this.ps.getById(id);
  }

  addToCart() {
    if (this.product) this.cart.add(this.product, this.qty);
    alert('Added to cart!');
  }
}
