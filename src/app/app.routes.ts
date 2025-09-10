import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { Mensection } from './components/mensection/mensection';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "PhsarMaterk — Men's Fashion" },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    title: 'Product — PhsarMaterk',
  },
  {
    path: 'men',
    component: Mensection,
  },

  { path: '**', redirectTo: '' },
];
