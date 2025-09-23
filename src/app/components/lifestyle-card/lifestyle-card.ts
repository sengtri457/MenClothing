import { Component, Input } from '@angular/core';
import { LifeStyles } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lifestyle-card',
  imports: [RouterLink],
  templateUrl: './lifestyle-card.html',
  styleUrl: './lifestyle-card.css',
})
export class LifestyleCard {
  @Input() lifestyle!: LifeStyles;
}
