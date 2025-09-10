import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-mensection',
  imports: [RouterLink, ProductCardComponent, CategoryPillsComponent],
  templateUrl: './mensection.html',
  styleUrl: './mensection.css',
})
export class Mensection {
  ps = inject(ProductService);
  products = this.ps.getAll();
  categories = this.ps.getCategories();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.products = this.ps.getByCategory(c);
  }
}
