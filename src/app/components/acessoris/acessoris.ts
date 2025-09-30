import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Acessoriescard } from '../acessoriescard/acessoriescard';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-acessoris',
  imports: [Acessoriescard, CategoryPillsComponent],
  templateUrl: './acessoris.html',
  styleUrl: './acessoris.css',
})
export class Acessoris {
  ac = inject(ProductService);
  accessories = this.ac.getAllAccessories();
  categories = this.ac.getAcCategory();
  filteredItems: any[] = [];
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.accessories = this.ac.getAcByCategory(c);
  }
  selectedSort = 'featured';
  onSortChange(event: any) {
    const value = event.target.value;
    this.selectedSort = value;
    this.accessories = this.ac.getSortAc(value);
  }
}
