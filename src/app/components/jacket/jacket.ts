import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { JacketCard } from '../jacket-card/jacket-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-jacket',
  imports: [ProductCardComponent, JacketCard, CategoryPillsComponent],
  templateUrl: './jacket.html',
  styleUrl: './jacket.css',
})
export class Jacket {
  jc = inject(ProductService);
  Jacket = this.jc.getAllJacket();
  categories = this.jc.getJacketCategory();
  active = 'All';
  isCollapsed = true;
  searchTerm: string = '';
  navBar = inject(ProductService);
  cart = this.navBar.cart;
  isNav: boolean = false;
  cartItem = inject(CartService);
  filteredItems: any[] = [];

  setCategory(c: string) {
    this.active = c;
    this.Jacket = this.jc.getJacketByCategory(c);
  }
  selectedSort = 'featured';
  onSortChange(event: any) {
    const value = event.target.value;
    this.selectedSort = value;
    this.Jacket = this.jc.getSortJacket(value);
  }
}
