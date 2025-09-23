import { Jacket } from './components/jacket/jacket';
import { Hoodies } from './components/hoodies/hoodies';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { Mensection } from './components/mensection/mensection';
import { Shoes } from './components/shoes/shoes';
import { ShoesDetail } from './components/shoes-detail/shoes-detail';
import { Acessoriesdetail } from './components/acessoriesdetail/acessoriesdetail';
import { Acessoris } from './components/acessoris/acessoris';
import { HoodiesDetail } from './components/hoodies-detail/hoodies-detail';
import { Tracksuits } from './components/tracksuits/tracksuits';
import { TracksuitsDetail } from './components/tracksuits-detail/tracksuits-detail';
import { JacketDetail } from './components/jacket-detail/jacket-detail';
import { Running } from './components/running/running';
import { RunningDetail } from './components/running-detail/running-detail';
import { Basketball } from './components/basketball/basketball';
import { BasketballDetail } from './components/basketball-detail/basketball-detail';
import { Lifestyle } from './components/lifestyle/lifestyle';
import { LifestyleDatail } from './components/lifestyle-datail/lifestyle-datail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
    title: "PhsarMaterk — Men's Fashion",
  },
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
    path: 'track',
    component: Tracksuits,
  },
  {
    path: 'track/:id',
    component: TracksuitsDetail,
  },
  {
    path: 'hoodie',
    component: Hoodies,
  },
  {
    path: 'hoodie/:id',
    component: HoodiesDetail,
  },
  {
    path: 'Accessory',
    component: Acessoris,
  },
  {
    path: 'shoes',
    component: Shoes,
  },
  {
    path: 'jacket',
    component: Jacket,
  },
  {
    path: 'jacket/:id',
    component: JacketDetail,
  },
  {
    path: 'running',
    component: Running,
  },
  {
    path: 'running/:id',
    component: RunningDetail,
  },
  {
    path: 'basketball',
    component: Basketball,
  },
  {
    path: 'basketball/:id',
    component: BasketballDetail,
  },
  {
    path: 'lifestyle',
    component: Lifestyle,
  },
  {
    path: 'lifestyle/:id',
    component: LifestyleDatail,
  },

  { path: '**', redirectTo: '' },
];
