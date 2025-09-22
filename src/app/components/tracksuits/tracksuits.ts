import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { TracksuitsCard } from '../tracksuits-card/tracksuits-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-tracksuits',
  imports: [TracksuitsCard, CategoryPillsComponent],
  templateUrl: './tracksuits.html',
  styleUrl: './tracksuits.css',
})
export class Tracksuits {
  track = inject(ProductService);
  Tracks = this.track.getAllTracksuits();
  categories = this.track.getTracksuitCategory();
  filteredItems: any[] = [];
  active = 'All';
  searchTerm: string = '';
  setCategory(c: string) {
    this.active = c;
    this.Tracks = this.track.getByTrackCategory(c);
  }
}
