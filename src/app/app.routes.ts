import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { Mensection } from './components/mensection/mensection';
import { Shoes } from './components/shoes/shoes';
import { ShoesDetail } from './components/shoes-detail/shoes-detail';
import { Acessoriesdetail } from './components/acessoriesdetail/acessoriesdetail';
import { Acessoris } from './components/acessoris/acessoris';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "PhsarMaterk — Men's Fashion" },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    title: 'Product — PhsarMaterk',
  },
  {
    path: 'shoes/:id',
    component: ShoesDetail,
    title: 'Product — PhsarMaterk',
  },
  {
    path: 'Accessory/:id',
    component: Acessoriesdetail,
    title: 'Product — PhsarMaterk',
  },
  {
    path: 'men',
    component: Mensection,
  },
  {
    path: 'Accessory',
    component: Acessoris,
  },
  {
    path: 'shoes',
    component: Shoes,
  },

  { path: '**', redirectTo: '' },
];
