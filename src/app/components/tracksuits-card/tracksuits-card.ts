import { Component, Input } from '@angular/core';
import { TracksuitsDetail } from '../tracksuits-detail/tracksuits-detail';
import { Tracksuits } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tracksuits-card',
  imports: [RouterLink],
  templateUrl: './tracksuits-card.html',
  styleUrl: './tracksuits-card.css',
})
export class TracksuitsCard {
  @Input() track!: Tracksuits;
}
