import { RouterLink } from '@angular/router';
import { Accessory } from './../../models/product.model';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-acessoriescard',
  imports: [RouterLink],
  templateUrl: './acessoriescard.html',
  styleUrl: './acessoriescard.css',
})
export class Acessoriescard {
  @Input() Accessory!: Accessory;
}
