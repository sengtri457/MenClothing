import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jacket-detail',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './jacket-detail.html',
  styleUrl: './jacket-detail.css',
})
export class JacketDetail {
  jacket: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.jacket = this.ps.getByHoodieId(id);
  }
  addShoesToCart() {
    if (this.jacket) {
      this.cart.add(this.jacket, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
}
