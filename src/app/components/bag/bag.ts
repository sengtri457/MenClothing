import { Component, inject } from '@angular/core';
import { AcServices } from '../../services/ac-services';
import { BagCard } from '../bag-card/bag-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-bag',
  imports: [BagCard, CategoryPillsComponent],
  templateUrl: './bag.html',
  styleUrl: './bag.css',
})
export class Bag {
  bag = inject(AcServices);
  Bags = this.bag.getAllBags();
  categories = this.bag.getBagCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.Bags = this.bag.getBagByCategory(c);
  }
  selectedSort = 'featured';
  onSortChange(event: any) {
    const value = event.target.value;
    this.selectedSort = value;
    this.Bags = this.bag.getSortBag(value);
  }
}
