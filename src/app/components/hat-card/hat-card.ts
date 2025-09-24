import { Component, Input } from '@angular/core';
import { Hats } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hat-card',
  imports: [RouterLink],
  templateUrl: './hat-card.html',
  styleUrl: './hat-card.css',
})
export class HatCard {
  @Input() hat!: Hats;
}
