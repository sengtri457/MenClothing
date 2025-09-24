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
import { HatDetail } from './components/hat-detail/hat-detail';
import { Hat } from './components/hat/hat';
import { Bag } from './components/bag/bag';
import { BagDatail } from './components/bag-datail/bag-datail';
import { Sock } from './components/sock/sock';
import { SockDetail } from './components/sock-detail/sock-detail';
import { Clothing } from './Main/clothing/clothing';
import { ClothingDetail } from './Main/clothing-detail/clothing-detail';

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
  {
    path: 'hat',
    component: Hat,
  },
  {
    path: 'hat/:id',
    component: HatDetail,
  },
  {
    path: 'bag',
    component: Bag,
  },
  {
    path: 'bag/:id',
    component: BagDatail,
  },
  {
    path: 'sock',
    component: Sock,
  },
  {
    path: 'sock/:id',
    component: SockDetail,
  },
  {
    path: 'clothing',
    component: Clothing,
  },
  {
    path: 'clothing/:id',
    component: ClothingDetail,
  },

  { path: '**', redirectTo: 'home' },
];
