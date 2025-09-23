import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basketball-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './basketball-detail.html',
  styleUrl: './basketball-detail.css',
})
export class BasketballDetail {
  basketball: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.basketball = this.ps.getBasketballById(id);
  }
  addShoesToCart() {
    if (this.basketball) {
      this.cart.add(this.basketball, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
}
