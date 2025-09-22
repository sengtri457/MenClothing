import { Component, Input } from '@angular/core';
import { Hoodie, Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hoodies-card',
  imports: [RouterLink],
  templateUrl: './hoodies-card.html',
  styleUrl: './hoodies-card.css',
})
export class HoodiesCard {
  @Input() hoodie!: Hoodie;
}
