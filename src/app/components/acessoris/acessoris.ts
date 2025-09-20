import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Acessoriescard } from '../acessoriescard/acessoriescard';

@Component({
  selector: 'app-acessoris',
  imports: [Acessoriescard],
  templateUrl: './acessoris.html',
  styleUrl: './acessoris.css',
})
export class Acessoris {
  ac = inject(ProductService);
  accessories = this.ac.getAllAccessories();
  filteredItems: any[] = [];
  active = 'All';
}
