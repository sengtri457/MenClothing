import { Component, Input } from '@angular/core';
import { Basketballs } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basketball-card',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './basketball-card.html',
  styleUrl: './basketball-card.css',
})
export class BasketballCard {
  @Input() basketball!: Basketballs;
}
