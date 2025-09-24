import { Component, inject } from '@angular/core';
import { AcServices } from '../../services/ac-services';
import { MainServices } from '../../services/main-services';
import { ClothingCard } from '../clothing-card/clothing-card';
import { CategoryPillsComponent } from '../../components/category-pills/category-pills.component';

@Component({
  selector: 'app-clothing',
  imports: [ClothingCard, CategoryPillsComponent],
  templateUrl: './clothing.html',
  styleUrl: './clothing.css',
})
export class Clothing {
  clothing = inject(MainServices);
  Clothings = this.clothing.getAllClothing();
  categories = this.clothing.getClothingCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.Clothings = this.clothing.getClothingByCategory(c);
  }
}
