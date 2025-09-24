import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracksuits-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tracksuits-detail.html',
  styleUrl: './tracksuits-detail.css',
})
export class TracksuitsDetail {
  track: any;
  qty = 1;
  selectedSize: any;
  cart = inject(CartService);
  constructor(private route: ActivatedRoute, private ps: ProductService) {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    debugger;
    this.track = this.ps.getByTracksuitId(id);
  }
  currentIndex: number = 0;

  setActiveImage(index: number) {
    this.currentIndex = index;
  }
  addTrackToCart() {
    if (this.track) {
      this.cart.add(this.track, this.qty, this.selectedSize);
    }
    alert('Added to cart!');
  }
  addFavorite() {
    if (this.track) {
      this.cart.addToFavorite(this.track, this.qty, this.selectedSize);
    }
  }
}
