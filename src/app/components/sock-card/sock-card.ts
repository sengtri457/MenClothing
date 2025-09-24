import { Component, Input } from '@angular/core';
import { Socks } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sock-card',
  imports: [RouterLink],
  templateUrl: './sock-card.html',
  styleUrl: './sock-card.css',
})
export class SockCard {
  @Input() sock!: Socks;
}
