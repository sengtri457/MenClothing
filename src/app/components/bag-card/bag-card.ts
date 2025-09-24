import { Component, Input } from '@angular/core';
import { Bags } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bag-card',
  imports: [RouterLink],
  templateUrl: './bag-card.html',
  styleUrl: './bag-card.css',
})
export class BagCard {
  @Input() bag!: Bags;
}
