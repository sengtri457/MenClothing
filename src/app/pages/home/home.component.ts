import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CategoryPillsComponent } from '../../components/category-pills/category-pills.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { GridLayout } from '../../components/grid-layout/grid-layout';
import { Info } from '../../components/info/info';
import { RouterLink } from '@angular/router';
import { Shoescard } from '../../components/shoescard/shoescard';
import { Acessoriescard } from '../../components/acessoriescard/acessoriescard';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    CategoryPillsComponent,
    ProductCardComponent,
    GridLayout,
    Info,
    RouterLink,
    Shoescard,
    Acessoriescard,
  ],
  templateUrl: './home.component.html',
  styleUrl: './homepage.css',
})
export class HomeComponent implements AfterViewInit {
  ps = inject(ProductService);
  active = 'All';
  categories = this.ps.getCategories();
  products = this.ps.getAll();
  shoes = this.ps.getAllShoes();
  ac = this.ps.getAllAccessories();
  newArrive = this.ps.getAllNewArrive();
  menu = inject(ProductService);

  @ViewChild('myVideo') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoRef.nativeElement;

    video.muted = true;
    video.volume = 0; // extra safety

    video.play();

    video.addEventListener('pause', () => video.play());
    video.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  setCategory(c: string) {
    this.active = c;
    this.products = this.ps.getByCategory(c);
  }
}
