import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BasketballCard } from '../basketball-card/basketball-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-basketball',
  imports: [BasketballCard, CategoryPillsComponent],
  templateUrl: './basketball.html',
  styleUrl: './basketball.css',
})
export class Basketball {
  basketball = inject(ProductService);
  Basketball = this.basketball.getAllBasketball();
  categories = this.basketball.getBasketballCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.Basketball = this.basketball.getBasketballByCategory(c);
  }
  selectedSort = 'featured';
  onSortChange(event: any) {
    const value = event.target.value;
    this.selectedSort = value;
    this.Basketball = this.basketball.getSortBasketBall(value);
  }
}
