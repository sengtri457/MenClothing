import { Component, Input } from '@angular/core';
import { Runnings } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-running-card',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './running-card.html',
  styleUrl: './running-card.css',
})
export class RunningCard {
  @Input() running!: Runnings;
}
