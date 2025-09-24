import { Component, Input } from '@angular/core';
import { Clothings } from '../../models/Main';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clothing-card',
  imports: [RouterLink],
  templateUrl: './clothing-card.html',
  styleUrl: './clothing-card.css',
})
export class ClothingCard {
  @Input() clothing!: Clothings;
}
