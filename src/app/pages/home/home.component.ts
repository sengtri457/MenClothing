import { Component, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryPillsComponent } from '../../components/category-pills/category-pills.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GridLayout } from '../../components/grid-layout/grid-layout';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    CategoryPillsComponent,
    ProductCardComponent,
    NavbarComponent,
    GridLayout,
  ],
  templateUrl: './home.component.html',
  styleUrl: './homepage.css',
})
export class HomeComponent {
  ps = inject(ProductService);
  active = 'All';
  categories = this.ps.getCategories();
  products = this.ps.getAll();

  setCategory(c: string) {
    this.active = c;
    this.products = this.ps.getByCategory(c);
  }
}
