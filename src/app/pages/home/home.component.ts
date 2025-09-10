import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CategoryPillsComponent } from '../../components/category-pills/category-pills.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { GridLayout } from '../../components/grid-layout/grid-layout';
import { Info } from '../../components/info/info';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    CategoryPillsComponent,
    ProductCardComponent,
    GridLayout,
    Info,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './homepage.css',
})
export class HomeComponent {
  ps = inject(ProductService);
  active = 'All';
  categories = this.ps.getCategories();
  products = this.ps.getAll();
  menu = inject(ProductService);

  setCategory(c: string) {
    this.active = c;
    this.products = this.ps.getByCategory(c);
  }
}
