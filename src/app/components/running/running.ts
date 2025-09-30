import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { RunningCard } from '../running-card/running-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-running',
  imports: [RunningCard, CategoryPillsComponent],
  templateUrl: './running.html',
  styleUrl: './running.css',
})
export class Running {
  rn = inject(ProductService);
  Running = this.rn.getAllRunning();
  categories = this.rn.getRunningCategory();
  active = 'All';
  isCollapsed = true;
  navBar = inject(ProductService);
  cart = this.navBar.cart;
  isNav: boolean = false;
  cartItem = inject(CartService);
  filteredItems: any[] = [];

  setCategory(c: string) {
    this.active = c;
    this.Running = this.rn.getRunningByCategory(c);
  }

  selectedSort = 'featured';
  onSortChange(event: any) {
    const value = event.target.value;
    this.selectedSort = value;
    this.Running = this.rn.getSortRunning(value);
  }
}
