import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AcServices } from '../../services/ac-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sock-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sock-detail.html',
  styleUrl: './sock-detail.css',
})
export class SockDetail {
  sock: any;
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
    this.sock = this.ps.getSockById(id);
  }
  addsocksToCart() {
    if (this.sock) {
      this.cart.add(this.sock, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.sock) {
      this.cart.addToFavorite(this.sock, this.qty, this.selectedSize);
    }
  }
}
