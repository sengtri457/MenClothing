import { Component, Input } from '@angular/core';
import { Shoes } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shoescard',
  imports: [RouterLink],
  templateUrl: './shoescard.html',
  styleUrl: './shoescard.css',
})
export class Shoescard {
  @Input() shoes!: Shoes;
  constructor(public pro: ProductService) {}
}
