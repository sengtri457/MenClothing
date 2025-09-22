import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HoodiesCard } from '../hoodies-card/hoodies-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hoodies',
  imports: [HoodiesCard, CategoryPillsComponent, RouterLink],
  templateUrl: './hoodies.html',
  styleUrl: './hoodies.css',
})
export class Hoodies {
  hoodie = inject(ProductService);
  Hoodie = this.hoodie.getAllHoodies();
  categories = this.hoodie.getHoodieCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.Hoodie = this.hoodie.getByHoodieCategory(c);
  }
}
