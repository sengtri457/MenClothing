import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';
import { Shoescard } from '../shoescard/shoescard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoes',
  imports: [CategoryPillsComponent, Shoescard, CommonModule, FormsModule],
  templateUrl: './shoes.html',
  styleUrl: './shoes.css',
})
export class Shoes implements OnInit {
  shoes = inject(ProductService);
  Shoes = this.shoes.getAllShoes();
  categories = this.shoes.getshoesCategory();
  filteredItems: any[] = [];
  active = 'All';
  searchTerm: string = '';
  ngOnInit(): void {
    this.filteredItems = this.Shoes;
  }
  setCategory(c: string) {
    this.active = c;
    this.Shoes = this.shoes.getByShoesCategory(c);
  }
  searchItems() {
    this.filteredItems = this.shoes.searchShoesItems(this.searchTerm);
  }
}
