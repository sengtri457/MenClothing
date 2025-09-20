import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acessoriesdetail',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './acessoriesdetail.html',
  styleUrl: './acessoriesdetail.css',
})
export class Acessoriesdetail {
  acc: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.acc = this.ps.getByAcId(id);
  }
  addShoesToCart() {
    if (this.acc) {
      this.cart.add(this.acc, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
}
