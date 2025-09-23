import { Component, inject } from '@angular/core';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';
import { ProductService } from '../../services/product.service';
import { LifestyleCard } from '../lifestyle-card/lifestyle-card';

@Component({
  selector: 'app-lifestyle',
  imports: [CategoryPillsComponent, LifestyleCard],
  templateUrl: './lifestyle.html',
  styleUrl: './lifestyle.css',
})
export class Lifestyle {
  lifestyle = inject(ProductService);
  LifeStyle = this.lifestyle.getAllLifeStyle();
  categories = this.lifestyle.getLifeStyleCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.LifeStyle = this.lifestyle.getLifeStyleByCategory(c);
  }
}
