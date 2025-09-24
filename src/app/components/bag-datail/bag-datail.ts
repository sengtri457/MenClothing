import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AcServices } from '../../services/ac-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bag-datail',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './bag-datail.html',
  styleUrl: './bag-datail.css',
})
export class BagDatail {
  bag: any;
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
    this.bag = this.ps.getBagById(id);
  }
  addbagToCart() {
    if (this.bag) {
      this.cart.add(this.bag, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.bag) {
      this.cart.addToFavorite(this.bag, this.qty, this.selectedSize);
    }
  }
}
