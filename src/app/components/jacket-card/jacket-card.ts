import { Component, Input } from '@angular/core';
import { Jackets } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jacket-card',
  imports: [RouterLink],
  templateUrl: './jacket-card.html',
  styleUrl: './jacket-card.css',
})
export class JacketCard {
  @Input() jacket!: Jackets;
}
