import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AcServices } from '../../services/ac-services';
import { HatCard } from '../hat-card/hat-card';
import { CategoryPillsComponent } from '../category-pills/category-pills.component';

@Component({
  selector: 'app-hat',
  imports: [HatCard, CategoryPillsComponent],
  templateUrl: './hat.html',
  styleUrl: './hat.css',
})
export class Hat {
  hat = inject(AcServices);
  Hats = this.hat.getAllHats();
  categories = this.hat.getHatCategory();
  active = 'All';
  setCategory(c: string) {
    this.active = c;
    this.Hats = this.hat.getHatByCategory(c);
  }
}
