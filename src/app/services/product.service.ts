import { Lifestyle } from './../components/lifestyle/lifestyle';
import { Hoodies } from './../components/hoodies/hoodies';
import {
  Accessory,
  Basketballs,
  Hoodie,
  Jackets,
  LifeStyles,
  Runnings,
  Tracksuits,
} from './../models/product.model';
import { HostListener, inject, Injectable, OnInit } from '@angular/core';
import { Product, Shoes } from '../models/product.model';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { Jacket } from '../components/jacket/jacket';

@Injectable({ providedIn: 'root' })
export class ProductService implements OnInit {
  public items: Product[] = [
    {
      id: 1,
      name: 'Classic Black',
      category: 'Graphic T-Shirts',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ebd2ae10-8b61-4b88-b60b-6decbbb3a8b1/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16e072ed-f40d-4e43-9e7d-a7686fadfebb/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b181afad-e90c-4058-914b-8ff17aed9f89/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],

      description:
        'Premium Classic Black with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Long Sleeve Shirts',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f0554d6-fca0-4590-9822-74d4cde5ca24/U+NSW+TEE+M90+OC+REMIX.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f47de7ec-8e6c-4426-84f0-bdbacfe3be47/U+NSW+TEE+M90+OC+REMIX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cc19d045-c340-490c-adc4-6d73f7234ce6/U+NSW+TEE+M90+OC+REMIX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bff07af3-8f97-4bd7-b2bb-bcbe2aa28d79/U+NSW+TEE+M90+OC+REMIX.png',
      ],
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Short Sleeve Shirts',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ad1c4733-874e-4eda-af5d-1953335e4ec1/M+NK+TEE+M90+PAINT.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af94fb6b-932e-4558-83a2-b00245b31681/M+NK+TEE+M90+PAINT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6d89a771-350b-4937-a499-3767a1c2cc5a/M+NK+TEE+M90+PAINT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f2ac174-1e0e-4929-a6bc-9d54e62eaabf/M+NK+TEE+M90+PAINT.png',
      ],
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'Short Sleeve Shirts',
      price: 129,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8512983d-d3c1-4821-90f0-d65e89f14cbb/M+NSW+TN+TEE.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8512983d-d3c1-4821-90f0-d65e89f14cbb/M+NSW+TN+TEE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2161fd56-1353-4325-98b0-2e23ed37d927/M+NSW+TN+TEE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c0b0b3f-be8d-4541-b381-cf9a680012ca/M+NSW+TN+TEE.png',
      ],
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Long Sleeve Shirts',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/479eb26c-95b8-4165-82d8-de9ba0d1edbd/U+NSW+TEE+M90+OC+PCKT+VNTG.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b175ec2f-2bdf-4f8e-8bb6-6293f63d765c/U+NSW+TEE+M90+OC+PCKT+VNTG.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/50a36cac-f348-4f09-b391-4e9f698034f4/U+NSW+TEE+M90+OC+PCKT+VNTG.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/28ddf3ba-71cf-4f21-8c4d-9f4f85a82f5c/U+NSW+TEE+M90+OC+PCKT+VNTG.png',
      ],
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike',
      category: 'Graphic T-Shirts',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e14aa88-63c9-4d33-96d8-6092f6ea2898/M+NK+TEE+M90+NAOS.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e14aa88-63c9-4d33-96d8-6092f6ea2898/M+NK+TEE+M90+NAOS.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/22805380-5ac9-4ff9-abef-4e940b51dba3/M+NK+TEE+M90+NAOS.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e664c46-d22e-4682-b506-eacd32e87d73/M+NK+TEE+M90+NAOS.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'F.C. Barcelona',
      category: 'Graphic T-Shirts',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6828b1d-28e0-4b9f-a9c3-1b27ecea3eb7/FCB+M+NK+T90+WRDMARK+TEE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6828b1d-28e0-4b9f-a9c3-1b27ecea3eb7/FCB+M+NK+T90+WRDMARK+TEE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/475e275f-3ee3-4725-a9f9-bfad1d0ad980/FCB+M+NK+T90+WRDMARK+TEE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2eec7c0e-60c9-4750-a680-e51770bc0e47/FCB+M+NK+T90+WRDMARK+TEE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Sportswear',
      category: 'Graphic T-Shirts',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9b939e4-24b8-4794-8fc0-e299611184a7/U+NSW+TEE+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9b939e4-24b8-4794-8fc0-e299611184a7/U+NSW+TEE+OC+OPEN.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d22bbdf3-c4ce-46c6-bd09-502209921a4e/U+NSW+TEE+OC+OPEN.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4e98edce-9095-4445-9d91-8d7ed3a37481/U+NSW+TEE+OC+OPEN.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  public shoes: Shoes[] = [
    {
      id: 1,
      name: 'Classic Kobes',
      category: 'Basketball',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e4810d6-f090-4afc-862d-775c3b06821f/LEBRON+XXIII+PVD.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e4810d6-f090-4afc-862d-775c3b06821f/LEBRON+XXIII+PVD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/208ab1ad-c8c8-4ec1-a06a-67d5cfb6fcfb/LEBRON+XXIII+PVD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1706cd36-2cba-471f-80e0-70e37ab6142e/LEBRON+XXIII+PVD.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Chunky Form',
      category: 'Lifestyle',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/lkwfba88t6qix4qxaavi/NIKE+ZOOM+VOMERO+5.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/lkwfba88t6qix4qxaavi/NIKE+ZOOM+VOMERO+5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/sqj9b8gqy0mofneog6cx/NIKE+ZOOM+VOMERO+5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/l0svab1ihb4o5dl7anuq/NIKE+ZOOM+VOMERO+5.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 3,
      name: 'Runner Men ',
      category: 'Running',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c9bee45-9b41-4b38-997a-1c056e2797db/NIKE+VOMERO+PREMIUM.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c9bee45-9b41-4b38-997a-1c056e2797db/NIKE+VOMERO+PREMIUM.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/035e0c19-df56-41e2-98ad-f8cec7a59021/NIKE+VOMERO+PREMIUM.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa550a34-ea36-4003-a9cf-d1db1e0eb36c/NIKE+VOMERO+PREMIUM.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 4,
      name: 'PGO',
      category: 'Jordan',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2d79ceb-04f2-4a4b-a5d1-90265f6c2db8/PG+4.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2d79ceb-04f2-4a4b-a5d1-90265f6c2db8/PG+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f6c8f34-d09c-4634-86ce-40d03619f7f2/PG+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c6c723f1-8f90-477e-8b7a-ba5b58f11efd/PG+4.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
  ];
  public Accessories: Accessory[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Bags',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5eb94fdc-b3df-4574-b8d1-b2a8670c6add/NK+AURA+CROSSBODY.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5eb94fdc-b3df-4574-b8d1-b2a8670c6add/NK+AURA+CROSSBODY.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb31ab38-4b49-4ee0-b887-9d3bc4952c94/NK+AURA+CROSSBODY.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12ef76eb-c70b-4a5b-aaf2-781754a7c1f8/NK+AURA+CROSSBODY.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Classic Black ',
      category: 'Hats',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fe099117-1cbc-4730-8f8b-fad780e208a5/U+NK+CLUB+CAP+U+CB+JDI+L.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fe099117-1cbc-4730-8f8b-fad780e208a5/U+NK+CLUB+CAP+U+CB+JDI+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f512fae1-410a-42d1-b638-aa9d45882610/U+NK+CLUB+CAP+U+CB+JDI+L.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 3,
      name: 'Classic Black ',
      category: 'Accessories',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d7dfjqsntrtf13clribk/NIKE+LEAN+ARM+BAND+PLUS.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d7dfjqsntrtf13clribk/NIKE+LEAN+ARM+BAND+PLUS.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bdaf1b8b-cd03-406c-8115-5e25b222e8fe/NIKE+LEAN+ARM+BAND+PLUS.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 4,
      name: 'Classic Black ',
      category: 'Socks',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69b0f149-19a1-4dd0-a975-e539a6c0d1dc/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d851ebf-03d2-4f0e-b377-1295c878d356/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
  ];
  cart = [
    {
      name: 'Black T-Shirt',
      size: 'M',
      quantity: 2,
      price: 25,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
    },
    {
      name: 'White Sneakers',
      size: '42',
      quantity: 1,
      price: 80,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
    },
    {
      name: 'White Sneakers',
      size: '42',
      quantity: 1,
      price: 80,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
    },
    {
      name: 'White Sneakers',
      size: '42',
      quantity: 1,
      price: 80,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
    },
    {
      name: 'White Sneakers',
      size: '42',
      quantity: 1,
      price: 80,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
    },
  ];

  public NewArrive: Product[] = [
    {
      id: 1,
      name: 'Classic Black',
      category: 'Graphic T-Shirts',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Modenr Black ',
      category: 'Graphic T-Shirts',
      price: 169,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f47de7ec-8e6c-4426-84f0-bdbacfe3be47/U+NSW+TEE+M90+OC+REMIX.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 3,
      name: 'Noise Perfect',
      category: 'Graphic T-Shirts',
      price: 169,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af94fb6b-932e-4558-83a2-b00245b31681/M+NK+TEE+M90+PAINT.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 4,
      name: 'White Blank',
      category: 'Graphic T-Shirts',
      price: 169,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8512983d-d3c1-4821-90f0-d65e89f14cbb/M+NSW+TN+TEE.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
  ];
  public Hoodies: Hoodie[] = [
    {
      id: 1,
      name: 'Nike Sportswear',
      category: 'Sweatshirts',
      price: 100,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7d98618-95c1-4d57-8f71-883893ec011b/M+NSW+SF+FZ+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7d98618-95c1-4d57-8f71-883893ec011b/M+NSW+SF+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df1deeae-be3c-4a36-b055-88eb9a18b696/M+NSW+SF+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6f549096-0326-41f1-9e0b-040157e4c9cc/M+NSW+SF+FZ+HOODIE.png',
      ],
      description: 'Clean meets casual with this classic hoodie.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Solo Swoosh',
      category: 'Crew Neck',
      price: 100,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aba6f7b9-7c81-49aa-9356-d9b314ac3d55/M+NL+SOLO+SWSH+BB+PO+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aba6f7b9-7c81-49aa-9356-d9b314ac3d55/M+NL+SOLO+SWSH+BB+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52ad1666-4fa0-4561-ab2a-2589d6f81825/M+NL+SOLO+SWSH+BB+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14cdb566-1dbe-49c3-8078-ed392a01f01f/M+NL+SOLO+SWSH+BB+PO+HOODIE.png',
      ],
      description:
        'Warm and structured, this hoodie is crafted from a heavyweight brushed fleece that feels plush on the inside and smooth on the outside',

      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Club',
      category: 'Hoodies',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17aca148-0178-4886-b536-6a70ecbfa1a7/M+NK+CLUB+BB+PO+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17aca148-0178-4886-b536-6a70ecbfa1a7/M+NK+CLUB+BB+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f696096e-081a-4f97-baa4-ede494774483/M+NK+CLUB+BB+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e09fa0f1-143d-4fdc-a856-aa5b932f08d9/M+NK+CLUB+BB+PO+HOODIE.png',
      ],
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Nike Solo Swoosh',
      category: 'Hoodies',
      price: 115,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38581170-176c-44c2-bd01-dbc81cae778b/M+NL+SOLO+SWSH+BB+FZ+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38581170-176c-44c2-bd01-dbc81cae778b/M+NL+SOLO+SWSH+BB+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90195fdf-2591-4489-836e-344e537e60d0/M+NL+SOLO+SWSH+BB+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38e4212f-528b-46d3-b974-0c84e31133cb/M+NL+SOLO+SWSH+BB+FZ+HOODIE.png',
      ],
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Nike Tech Boreas',
      category: 'Sweatshirts',
      price: 235,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2493074a-4f8d-4f24-8cb1-28b8431abe5d/M+NK+TCH+TF+BOREAS+PO+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2493074a-4f8d-4f24-8cb1-28b8431abe5d/M+NK+TCH+TF+BOREAS+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/54343500-f05d-4065-9df0-3b87b101bebe/M+NK+TCH+TF+BOREAS+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b38dd78-db88-4dfb-8184-d48dfa94c4e9/M+NK+TCH+TF+BOREAS+PO+HOODIE.png',
      ],
      description:
        'Armour for unpredictable conditions, this roomy, super-warm hoodie is built for taking on the city.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike Standard Issue',
      category: 'Sweatshirts',
      price: 95,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fa4ed2b4-65bb-44f0-bd2b-f5734528cd1a/M+NK+TF+SI+BRSH+CREW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fa4ed2b4-65bb-44f0-bd2b-f5734528cd1a/M+NK+TF+SI+BRSH+CREW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b21dfb14-bc49-4fab-bf31-de0f45ff1659/M+NK+TF+SI+BRSH+CREW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e708dc1b-20d8-45ec-8e00-2c77bc094ef1/M+NK+TF+SI+BRSH+CREW.png',
      ],
      description:
        'When you want to take your game outside but the temps are a tad chilly, throw on this loose-fitting crewneck.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Chelsea F.C. Third',
      category: 'Sweatshirts',
      price: 150,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4f80bfd-1a15-497d-ba35-6e577515ff11/CFC+M+NK+T90+CREW+TOP+3R+GX.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4f80bfd-1a15-497d-ba35-6e577515ff11/CFC+M+NK+T90+CREW+TOP+3R+GX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8b983c-3716-42db-921b-86894f2bcf58/CFC+M+NK+T90+CREW+TOP+3R+GX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d8815cf7-dec4-401b-a07d-2b9e36739c31/CFC+M+NK+T90+CREW+TOP+3R+GX.png',
      ],
      description:
        'This Chelsea F.C. top pairs the early-2000s energy of Nike iconic football kits with functional style. ',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Inter Milan Tech Windrunner',
      category: 'Sweatshirts',
      price: 195,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/faf5012a-3442-44d6-819e-a24bea777b60/INTER+MNK+TCH+FLC+FZ+WR+HDY+3R.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/faf5012a-3442-44d6-819e-a24bea777b60/INTER+MNK+TCH+FLC+FZ+WR+HDY+3R.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cba5784d-57ad-41a6-9294-8a6444e4cc2d/INTER+MNK+TCH+FLC+FZ+WR+HDY+3R.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/469a8aec-cff9-417a-b72b-080022f0dd79/INTER+MNK+TCH+FLC+FZ+WR+HDY+3R.png',
      ],
      description:
        'This Windrunner hoodie updates an iconic look with our premium, lightweight Tech Fleece—smooth both inside and out—to give you plenty of warmth without adding bulk. It features Inter Milans crest and colours',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  public Tracksuit: Tracksuits[] = [
    {
      id: 1,
      name: 'Nike Tech',
      category: 'Tracksuit Sets',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/117bbbb3-2d75-4c4a-a14a-a2ac6dce41e6/M+NK+DF+TCH+WVN+WR+FZ+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/117bbbb3-2d75-4c4a-a14a-a2ac6dce41e6/M+NK+DF+TCH+WVN+WR+FZ+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e26372de-d36c-48de-9264-353a0edf7382/M+NK+DF+TCH+WVN+WR+FZ+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57f9a930-7315-41c0-a35c-0f3b0dba3cbf/M+NK+DF+TCH+WVN+WR+FZ+JKT.png',
      ],
      description:
        'Crafted from stretchy, breathable material, the Nike Tech Woven Jacket offers you ease of movement and adjustable details. ',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Tech',
      category: 'Tracksuit Tops',
      price: 149,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a256da75-9fc8-42d0-8ad1-3ab1a368a15a/M+NK+TCH+FLC+FZ+WR+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a256da75-9fc8-42d0-8ad1-3ab1a368a15a/M+NK+TCH+FLC+FZ+WR+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bf358b8c-9f56-4742-b24f-3ed10c84dd92/M+NK+TCH+FLC+FZ+WR+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5596b21d-fc82-47f1-838a-94648f7f4e80/M+NK+TCH+FLC+FZ+WR+HOODIE.png',
      ],
      description:
        'Iconic Nike Windrunner style gets an injection of premium comfort with our smooth-on-both-sides fleece. Its paired with a relaxed fit and technical details',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Tech',
      category: 'Tracksuit Bottoms',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdaf3b1-4a99-47f9-b2d8-e14dd1199e8b/M+NK+DF+TCH+WVN+PANT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdaf3b1-4a99-47f9-b2d8-e14dd1199e8b/M+NK+DF+TCH+WVN+PANT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2a7a35bb-a174-4b28-bc2e-9a9b3800e679/M+NK+DF+TCH+WVN+PANT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/741e2cd9-9ccc-4570-9ef6-376220b336ff/M+NK+DF+TCH+WVN+PANT.png',
      ],
      description:
        'Crafted from stretchy woven material, these Nike Tech trousers offer you ease of movement and adjustability.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Nike Tech',
      category: 'Tracksuit Bottoms',
      price: 29,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37ed2821-9881-4a18-b7f4-5b9f1357671f/M+NK+DF+TCH+WVN+OH+PANT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37ed2821-9881-4a18-b7f4-5b9f1357671f/M+NK+DF+TCH+WVN+OH+PANT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ee758fc-86ed-4f15-ac30-ebd2b70e6add/M+NK+DF+TCH+WVN+OH+PANT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61b4a681-b267-4c02-ba81-4b3684e16b12/M+NK+DF+TCH+WVN+OH+PANT.png',
      ],
      description:
        'Made from stretchy, sweat-wicking fabric, these tapered trousers offer a clean Nike Tech look. A roomier fit through',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Nike Sportswear Air Max',
      category: 'Tracksuit Sets',
      price: 135,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07a16d0a-c174-4b19-9f84-25370b234b58/M+NSW+AIR+MAX+PK+FZ+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07a16d0a-c174-4b19-9f84-25370b234b58/M+NSW+AIR+MAX+PK+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c00193d-74fb-4d08-a8a9-de60be2cd9d7/M+NSW+AIR+MAX+PK+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/809065e1-9697-41d0-9963-6c4a77f15104/M+NSW+AIR+MAX+PK+FZ+HOODIE.png',
      ],
      description:
        'The Heritage Air Max style and smooth, double-knit fabric make this sweat-wicking hoodie a wardrobe staple. ',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike Academy',
      category: 'Tracksuit Sets',
      price: 159,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cc21a71-c347-42a7-b430-38861581dd3f/M+NK+DF+ACD25+TRK+SUIT+BR.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cc21a71-c347-42a7-b430-38861581dd3f/M+NK+DF+ACD25+TRK+SUIT+BR.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18a0322d-ee10-477b-8862-3a35b61cb86f/M+NK+DF+ACD25+TRK+SUIT+BR.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6802f13e-19c2-4b0a-8506-1ba0fdbfbbaa/M+NK+DF+ACD25+TRK+SUIT+BR.png',
      ],
      description:
        'Built for warm-ups and off-pitch wear, this tracksuit is made from breathable, sweat-wicking knit fabric. ',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Nike Sportswear Air Max',
      category: 'Tracksuit Tops',
      price: 160,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d740317-a056-4b9e-bac5-ae09c4750d9a/M+NSW+AIR+MAX+WVN+JACKET.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d740317-a056-4b9e-bac5-ae09c4750d9a/M+NSW+AIR+MAX+WVN+JACKET.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3ddd61b4-21e4-4206-a605-2f2d8c9043fc/M+NSW+AIR+MAX+WVN+JACKET.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/64528637-78d2-4f89-928b-adb1fa73fb83/M+NSW+AIR+MAX+WVN+JACKET.png',
      ],
      description:
        'Zip up and get out in this roomy woven jacket. Featuring durable, sweat-wicking fabric and a spacious hood, it provides style, comfort and coverage whenever you need.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Club',
      category: 'Tracksuit Tops',
      price: 95,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e54a1ab-2dc6-44ca-adb3-77a6125d5f33/M+NK+CLUB+KNIT+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e54a1ab-2dc6-44ca-adb3-77a6125d5f33/M+NK+CLUB+KNIT+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d727dcc-c2dd-43a1-9075-4626cc7d6377/M+NK+CLUB+KNIT+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a120833-6529-498b-9e92-b1b3f7b60f7d/M+NK+CLUB+KNIT+JKT.png',
      ],
      description:
        'Clean and classic, this knit full-zip top gives you a versatile midweight layer you can wear throughout the year.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  public Jacket: Jackets[] = [
    {
      id: 1,
      name: 'Nike Sportswear ',
      category: 'Windbreakers',
      price: 120,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2cfeac-35c5-4aba-8bac-8dcbc082f2e8/M+NK+WVN+LND+WR+HD+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2cfeac-35c5-4aba-8bac-8dcbc082f2e8/M+NK+WVN+LND+WR+HD+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f1bb780-488f-4bb5-904c-2e0cb527d95a/M+NK+WVN+LND+WR+HD+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89d24d0b-44fe-4fa1-97c5-2b060e2fd27b/M+NK+WVN+LND+WR+HD+JKT.png',
      ],
      description:
        'The Nike Sportswear Windrunner Jacket updates our first running windbreaker with lightweight fabric made from recycled materials. Design details pulled from the original version provide a heritage Nike look.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Unlimited',
      category: 'Parka Jackets',
      price: 130,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c40b3ea-319d-48f5-800e-217fec518487/M+NK+RPL+UNLIMITED+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c40b3ea-319d-48f5-800e-217fec518487/M+NK+RPL+UNLIMITED+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff1a29f5-4885-4b42-a845-66f0004ff083/M+NK+RPL+UNLIMITED+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7258d93a-d6da-4b17-9c06-eaa6d7f533d6/M+NK+RPL+UNLIMITED+JKT.png',
      ],
      description:
        'Built for running, training and yoga, our Unlimited collection helps keep you moving throughout the year, thanks to its premium materials and innovative features.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Impossibly ',
      category: 'Parka Jackets',
      price: 150,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3c0bb4f-d1b8-4ff7-b049-2b4d4125280e/M+NK+IMP+LGHT+WR+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3c0bb4f-d1b8-4ff7-b049-2b4d4125280e/M+NK+IMP+LGHT+WR+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/afc75b3d-372a-407f-b4b4-99c15ea050ee/M+NK+IMP+LGHT+WR+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/730a43e6-3b6b-4e4f-9690-56980ba1e0b1/M+NK+IMP+LGHT+WR+JKT.png',
      ],
      description:
        'Our iconic Windrunner jacket is ready for the next chapter with a packable design and breathable fabric.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Jordan Flight Suit',
      category: 'Bomber Jackets',
      price: 152,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/53c93093-2bfa-445a-8aa0-901e352f5e5e/M+J+FLT+SUIT+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/53c93093-2bfa-445a-8aa0-901e352f5e5e/M+J+FLT+SUIT+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d4b977d4-b216-41b7-8f44-617764e3d251/M+J+FLT+SUIT+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0ed9a80a-f302-4600-baff-aa80609287a1/M+J+FLT+SUIT+JKT.png',
      ],
      description:
        'The Jordan Flight Suit Jacket riffs on the illustrious look of MJs iconic design for a fresh take on heritage. ',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Brown', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Liverpool F.C. ',
      category: 'Bomber Jackets',
      price: 115,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55a924ee-7cb4-458e-900f-788c653937fb/LFC+M+NSW+SPE+WVN+UL+BOMBR+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55a924ee-7cb4-458e-900f-788c653937fb/LFC+M+NSW+SPE+WVN+UL+BOMBR+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33706582-2e5e-415e-b23f-ed31a1e80e74/LFC+M+NSW+SPE+WVN+UL+BOMBR+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfed3545-7c06-4953-a458-299ed493e2cc/LFC+M+NSW+SPE+WVN+UL+BOMBR+JKT.png',
      ],
      description:
        'Made from everyday layering in mind, this Liverpool Sport Essentials Bomber Jacket is a versatile, unlined version of the original. ',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Parka Jackets',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2cfeac-35c5-4aba-8bac-8dcbc082f2e8/M+NK+WVN+LND+WR+HD+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f2cfeac-35c5-4aba-8bac-8dcbc082f2e8/M+NK+WVN+LND+WR+HD+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f1bb780-488f-4bb5-904c-2e0cb527d95a/M+NK+WVN+LND+WR+HD+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89d24d0b-44fe-4fa1-97c5-2b060e2fd27b/M+NK+WVN+LND+WR+HD+JKT.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      description: 'UV400 lenses with lightweight metal frame.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Nike ACG',
      category: 'Windbreakers',
      price: 122.99,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/432c110b-3431-4252-8bd8-dbc50dd2dba1/M+ACG+WNDPRF+CNDR+CNE+JKT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/432c110b-3431-4252-8bd8-dbc50dd2dba1/M+ACG+WNDPRF+CNDR+CNE+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39c793e0-d6ef-44ab-83a2-51346fbb6451/M+ACG+WNDPRF+CNDR+CNE+JKT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec7d9065-e559-4090-b69c-2b8245cecfa8/M+ACG+WNDPRF+CNDR+CNE+JKT.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      description:
        'Adventure beckons. The Nike ACG Jacket answers the challenge with lightweight, water-repellent fabric thats made from 100% recycled nylon fibres.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Sportswear ',
      category: 'Parka Jackets',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/luhqpxfezqlhnsdaawp6/M+NSW+SCE+WR+JKT+HD.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/luhqpxfezqlhnsdaawp6/M+NSW+SCE+WR+JKT+HD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/lamaija5v1xybons5fky/M+NSW+SCE+WR+JKT+HD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hl8nikaqbudcit9gsmm0/M+NSW+SCE+WR+JKT+HD.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      description:
        'More than a direct descendant, the Nike Sportswear Windrunner Windbreaker is made to look and feel just like the original Windrunner from 1978. ',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  public Running: Runnings[] = [
    {
      id: 1,
      name: 'Nike Vomero ',
      category: 'Road Running',
      price: 285,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c9bee45-9b41-4b38-997a-1c056e2797db/NIKE+VOMERO+PREMIUM.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c9bee45-9b41-4b38-997a-1c056e2797db/NIKE+VOMERO+PREMIUM.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/027e6d28-31f5-4bd3-ba70-95063a164704/NIKE+VOMERO+PREMIUM.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/035e0c19-df56-41e2-98ad-f8cec7a59021/NIKE+VOMERO+PREMIUM.png',
      ],
      description:
        'Take maximum cushioning to the extreme in the Vomero Premium. Two energy-boosting Air Zoom units are surrounded by ultra-soft, responsive ZoomX foam to give you our most comfortable ride yet for everyday road runs.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Pegasus ',
      category: 'Trail Running',
      price: 180,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/959574fe-9645-4f43-8906-5e7faf8d2574/NIKE+REACTX+PEGASUS+TRAIL+5.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/959574fe-9645-4f43-8906-5e7faf8d2574/NIKE+REACTX+PEGASUS+TRAIL+5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e95955ba-68c8-4171-bf0c-051842df2d4e/NIKE+REACTX+PEGASUS+TRAIL+5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0dc02873-63c7-41fd-880c-ba6b1b1ce12a/NIKE+REACTX+PEGASUS+TRAIL+5.png',
      ],
      description:
        'Spread your wings and see what nature brings as you chase earthy paths in the Peg Trail 5.',
      sizes: ['40', '41', '42', '43'],
      colors: ['White'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Pegasus ',
      category: 'Trail Running',
      price: 190,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e806438-7c44-4391-a2fa-4713bb7d77fc/NIKE+REACTX+PEGASUS+TRAIL+5.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e806438-7c44-4391-a2fa-4713bb7d77fc/NIKE+REACTX+PEGASUS+TRAIL+5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e345c6e1-afa8-433e-ab96-b739db9dffd0/NIKE+REACTX+PEGASUS+TRAIL+5.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6d898394-bc12-4044-82c0-d279b778ae0c/NIKE+REACTX+PEGASUS+TRAIL+5.png',
      ],
      description:
        'Spread your wings and see what nature brings as you chase earthy paths in the Peg Trail 5. Now equipped with an ultra-responsive ReactX foam midsole',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Nike Vomero Plus',
      category: 'Road Running',
      price: 225,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4d56adf-b6cd-42af-bdd7-8f40abf4161d/NIKE+VOMERO+PLUS.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4d56adf-b6cd-42af-bdd7-8f40abf4161d/NIKE+VOMERO+PLUS.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25d120ab-a254-404f-bca2-583c8cadcbbf/NIKE+VOMERO+PLUS.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de30ee8d-e683-40c0-ae8a-7659dd28354a/NIKE+VOMERO+PLUS.png',
      ],
      description:
        'A tall stack of responsive, light foam offers next-level cushioning.ake maximum cushioning to the next level with the Vomero Plus. It provides an ultra-comfortable ride for everyday runs thanks to a mountainous stack of full-length ZoomX foam',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Nike Vaporfly 4',
      category: 'Athletics',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa5e57af-f852-49ea-ada9-dc0ae07eae0d/ZOOMX+VAPORFLY+NEXT%25+4.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa5e57af-f852-49ea-ada9-dc0ae07eae0d/ZOOMX+VAPORFLY+NEXT%25+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bd8046a3-014d-4b08-bd3d-6d335db62df5/ZOOMX+VAPORFLY+NEXT%25+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b834cf55-0868-42b1-b819-fb6e8b2acf71/ZOOMX+VAPORFLY+NEXT%25+4.png',
      ],
      description:
        'The Vaporfly 4 is a lean, mean, mile-eating machine. We trimmed weight in the midsole, outsole and upper from the Vaporfly 3, without sacrificing performance. The result is a lighter',
      sizes: ['40', '41', '42', '43', '44'],

      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike Vaporfly 4',
      category: 'Athletics',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2eab0beb-140d-4490-b3b1-57acc6415dd3/ZOOMX+VAPORFLY+NEXT%25+4+PRM.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2eab0beb-140d-4490-b3b1-57acc6415dd3/ZOOMX+VAPORFLY+NEXT%25+4+PRM.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7938b836-95a7-4638-909c-3b1c77a1cfd8/ZOOMX+VAPORFLY+NEXT%25+4+PRM.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80ddd3c6-3219-44be-afdd-963a675bafd1/ZOOMX+VAPORFLY+NEXT%25+4+PRM.png',
      ],
      sizes: ['40', '41', '42', '43', '44'],
      description:
        'The Vaporfly 4 is a mile-eating machine that just got lighter. We trimmed weight with a carbon-fibre Flyplate and ultra-responsive ZoomX foam midsole to give you race-day speed without sacrificing performance.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Nike Pegasus Premium',
      category: 'Road Running',
      price: 159,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/036a0092-6e4c-42fc-92d7-4a50ae1611e0/NIKE+PEGASUS+PREMIUM+LV8.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/036a0092-6e4c-42fc-92d7-4a50ae1611e0/NIKE+PEGASUS+PREMIUM+LV8.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2ea9d82-7fe1-434d-87c1-80779c9f05c2/NIKE+PEGASUS+PREMIUM+LV8.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b4029392-8cc8-4446-bbd9-6817f6d3ad7f/NIKE+PEGASUS+PREMIUM+LV8.png',
      ],
      sizes: ['40', '41', '42', '43', '44'],
      description:
        'The Vaporfly 4 is a mile-eating machine that just got lighter. We trimmed weight with a carbon-fibre Flyplate and ultra-responsive ZoomX foam midsole to give you race-day speed without sacrificing performance.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Vomero 18 SE',
      category: 'Athletics',
      price: 200,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cd9e216-9792-4c6d-b503-ec1e37868951/NIKE+VOMERO+18+SE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2cd9e216-9792-4c6d-b503-ec1e37868951/NIKE+VOMERO+18+SE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cf165a6-7ecb-4421-bb8b-aa669abc41c6/NIKE+VOMERO+18+SE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de026fc2-a1cc-431f-ae8a-ea9398af76e3/NIKE+VOMERO+18+SE.png',
      ],
      sizes: ['40', '41', '42', '43', '44'],

      description:
        'The Vaporfly 4 is a mile-eating machine that just got lighter. We trimmed weight with a carbon-fibre Flyplate and ultra-responsive ZoomX foam midsole to give you race-day speed without sacrificing performance.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  public Basketball: Basketballs[] = [
    {
      id: 1,
      name: 'LeBron XXIII',
      category: 'Jordan',
      price: 260,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e4810d6-f090-4afc-862d-775c3b06821f/LEBRON+XXIII+PVD.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e4810d6-f090-4afc-862d-775c3b06821f/LEBRON+XXIII+PVD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4e845e7d-8579-490d-84dc-362c34ff3928/LEBRON+XXIII+PVD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d2a560b-97f8-4a1a-88fd-25d1168a4293/LEBRON+XXIII+PVD.png',
      ],
      description:
        'LeBrons carried the game for two decades. But what if we could help lighten the load? Enter the LeBron XXIII.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'KD18 Unfinished',
      category: 'Kobe Bryant',
      price: 210,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07028496-82c8-46e4-8b14-e0ff4f116456/KD18+SE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07028496-82c8-46e4-8b14-e0ff4f116456/KD18+SE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87609420-7fee-42d1-b6ad-a0f1a2927d13/KD18+SE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5306ab96-5175-483b-b2a7-1a6a671b65e7/KD18+SE.png',
      ],
      description:
        '30K and counting. KD is making history with each passing season, yet theres more work to be done. More grails to go after.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Giannis Freak 6',
      category: 'Jordan',
      price: 126.99,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30ff398c-2abe-43dc-b86a-4592b7e5689a/GIANNIS+FREAK+6.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30ff398c-2abe-43dc-b86a-4592b7e5689a/GIANNIS+FREAK+6.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f227e435-e175-4e50-b9fb-9000d5e0d525/GIANNIS+FREAK+6.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7e6141d-7e2e-4331-a8ec-c89c115ffe78/GIANNIS+FREAK+6.png',
      ],
      description:
        'Giannis needs a shoe to dominate the modern positionless game. Thats why weve upgraded the traction pattern on the Giannis Freak 6. ',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'LeBron XXII',
      category: 'LeBron James',
      price: 245,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/143446d4-479d-4804-a55f-c155378f064f/LEBRON+XXII+BW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/143446d4-479d-4804-a55f-c155378f064f/LEBRON+XXII+BW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f82cb9c8-cf23-4f7d-b06e-7a3185bd5d42/LEBRON+XXII+BW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b8033a9d-f5fb-4385-96e5-2ace68c74581/LEBRON+XXII+BW.png',
      ],
      description:
        'LeBron isnt slowing down any time soon. The open-court nightmare is as fast and spry as ever. But even Bron needs support when hes at full throttle. Thats why we levelled up the LeBron 22.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Tatum 3 ',
      category: 'Jordan',
      price: 235,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c33acc6e-ccf8-4393-96cd-f2419e96b1a1/JORDAN+TATUM+3.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c33acc6e-ccf8-4393-96cd-f2419e96b1a1/JORDAN+TATUM+3.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b92906b5-1e58-43f3-ad03-e25dc6da986f/JORDAN+TATUM+3.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e2c81caa-4a14-4f29-aadb-7d587f372ed8/JORDAN+TATUM+3.png',
      ],
      description:
        'Ready to stand out? A smooth blend of tie-dye and distressed denim give this Tatum 3 a casual but colourful update thats sure to get noticed.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Luka 4 Light Orewood',
      category: 'Kobe Bryant',
      price: 159,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3eaa9f3-f756-4aee-a980-0fa972e0d4ae/JORDAN+LUKA+4.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3eaa9f3-f756-4aee-a980-0fa972e0d4ae/JORDAN+LUKA+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5f6ceeba-d853-4959-8f10-296311cb1ccc/JORDAN+LUKA+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a3063c90-6afe-4187-ae7c-17834b82b424/JORDAN+LUKA+4.png',
      ],
      sizes: ['40', '41', '42', '43', '44'],
      description:
        'Luka Dončić plays with zero remorse. He hits game winners without breaking a sweat and leaves defenders looking clueless—and he never feels bad about it.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Zion 4',
      category: 'LeBron James',
      price: 259,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0917b12b-05ea-4e51-8e57-4a77895acdf8/JORDAN+ZION+4.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0917b12b-05ea-4e51-8e57-4a77895acdf8/JORDAN+ZION+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7fb0259d-3a53-4fc8-91fd-54b567bb4f14/JORDAN+ZION+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a61bd1f6-b35d-4858-a562-561aaa73ffbc/JORDAN+ZION+4.png',
      ],
      sizes: ['40', '41', '42', '43', '44'],
      description:
        'Luka Dončić plays with zero remorse. He hits game winners without breaking a sweat and leaves defenders looking clueless—and he never feels bad about it.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Luka 4 Bloodline',
      category: 'LeBron James',
      price: 170,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c25ff8b-81b3-49ab-81ce-c5cd52bcf3c9/JORDAN+LUKA+4.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c25ff8b-81b3-49ab-81ce-c5cd52bcf3c9/JORDAN+LUKA+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/26a9f5a2-3b52-4bbf-8728-5d7ebbab2114/JORDAN+LUKA+4.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e23c0b9b-297f-4a1a-bf8f-024bfd767fa1/JORDAN+LUKA+4.png',
      ],
      sizes: ['40', '41', '42', '43', '44'],
      description:
        'Luka Dončić plays with zero remorse. He hits game winners without breaking a sweat and leaves defenders looking clueless—and he never feels bad about it.',
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  public LifeStyle: LifeStyles[] = [
    {
      id: 1,
      name: 'Nike SB Dunk Low Pro',
      category: 'Nike Dunk',
      price: 175,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60ec9fc4-57fa-40bf-9d41-d19cc4cde6e0/NIKE+SB+DUNK+LOW+PRO+QS.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60ec9fc4-57fa-40bf-9d41-d19cc4cde6e0/NIKE+SB+DUNK+LOW+PRO+QS.png',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/6a83c16f-9a1b-4a67-8f96-3a01aa4b85bf/nike-sb-dunk-low-pro-x-riot-skateshop-mahogany-and-team-red-fz1289-200-release-date.jpg',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/3d8b4382-6be8-42d9-9a4a-daf3472f5192/nike-sb-dunk-low-pro-x-riot-skateshop-mahogany-and-team-red-fz1289-200-release-date.jpg',
      ],
      description:
        'Timing is everything and in the fine art of vinification, age matters. Since 2004, Riot Skateshop in Bordeaux, France has cultivated.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Air Force GORE-TEX',
      category: 'Air Force',
      price: 190,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cde9042-7bbf-4bc3-9870-2891c27e7888/AIR+FORCE+1+GTX.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cde9042-7bbf-4bc3-9870-2891c27e7888/AIR+FORCE+1+GTX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6bcdc3d7-b5cf-4dfe-acea-93088aa86ea3/AIR+FORCE+1+GTX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f0244d3-d358-497e-a10f-c843eaa7190c/AIR+FORCE+1+GTX.png',
      ],
      description:
        'The Nike Air Force 1 GORE-TEX ® retools the classic Air Force 1 with a street-approved design that meets the standards of GORE-TEX ® waterproof technology.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Dunk Low Retro SE',
      category: 'Nike Dunk',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/797de1aa-b9dd-4405-a14b-34cb11dd759e/NIKE+DUNK+LOW+RETRO+SE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/797de1aa-b9dd-4405-a14b-34cb11dd759e/NIKE+DUNK+LOW+RETRO+SE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d027d995-792d-41e6-8d7f-62a71f78d503/NIKE+DUNK+LOW+RETRO+SE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39d63836-f1a3-494d-b00d-7f4b26445b13/NIKE+DUNK+LOW+RETRO+SE.png',
      ],
      description:
        'Timing is everything and in the fine art of vinification, age matters. Since 2004, Riot Skateshop in Bordeaux, France has cultivated.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Air Max 90 x Slawn',
      category: 'Air Force',
      price: 190,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4feb8f5d-2818-4ac5-ada6-b0d206e079cc/AIR+MAX+90+SP.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4feb8f5d-2818-4ac5-ada6-b0d206e079cc/AIR+MAX+90+SP.png',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/716f4ab0-9095-4f40-ac73-7155a9777491/air-max-90-x-slawn-black-fd6492-001-release-date.jpg',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/9a1fe014-22e5-440b-ab28-5cdb3f086c45/air-max-90-x-slawn-black-fd6492-001-release-date.jpg',
      ],
      description:
        'Slawn, Nigerian artist and designer, teams up with Nike to put his own spin on the Air Max 90. Known for large-scale paintings, sculptures and design.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Air Jordan 1 Low',
      category: 'Jordan',
      price: 150,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fb1b763b-54ad-49f4-86c1-112304573a32/AIR+JORDAN+1+LOW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fb1b763b-54ad-49f4-86c1-112304573a32/AIR+JORDAN+1+LOW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5e5ab9b-a5e8-476e-8683-9a0798f932d5/AIR+JORDAN+1+LOW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/98c5767b-1cc2-406a-b47c-c27d3c0a9783/AIR+JORDAN+1+LOW.png',
      ],
      description:
        'Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look thats familiar yet always fresh.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Air Jordan 1 Mid',
      category: 'Jordan',
      price: 165,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/36abf0fc-f600-4627-a06d-feb191ca3582/AIR+JORDAN+1+MID.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/36abf0fc-f600-4627-a06d-feb191ca3582/AIR+JORDAN+1+MID.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9fbfa606-7565-4d0e-84a3-7ae139b81bd7/AIR+JORDAN+1+MID.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c115d582-cada-454d-b1d4-1651bf3b2496/AIR+JORDAN+1+MID.png',
      ],
      description:
        'Timing is everything and in the fine art of vinification, age matters. Since 2004, Riot Skateshop in Bordeaux, France has cultivated.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Jordan Flight Court',
      category: 'Jordan',
      price: 135,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2801c940-f328-439a-b13f-a3ce3f97f386/JORDAN+FLIGHT+COURT.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2801c940-f328-439a-b13f-a3ce3f97f386/JORDAN+FLIGHT+COURT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ef2631f1-a93f-416b-9919-274cc1baf1ca/JORDAN+FLIGHT+COURT.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ee737d60-cab4-4284-b5ba-f5fc10a23542/JORDAN+FLIGHT+COURT.png',
      ],
      description:
        'Timing is everything and in the fine art of vinification, age matters. Since 2004, Riot Skateshop in Bordeaux, France has cultivated.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Jordan Spizike Low',
      category: 'Air Force',
      price: 210,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bae07de7-7b5e-4d5f-973c-953f1750a591/JORDAN+SPIZIKE+LOW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bae07de7-7b5e-4d5f-973c-953f1750a591/JORDAN+SPIZIKE+LOW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/64c325a5-1e36-42bf-a08b-97f056b64a9c/JORDAN+SPIZIKE+LOW.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/059b0c36-5364-4c6c-9828-eb3b4f1b59e7/JORDAN+SPIZIKE+LOW.png',
      ],
      description:
        'Timing is everything and in the fine art of vinification, age matters. Since 2004, Riot Skateshop in Bordeaux, France has cultivated.',
      sizes: ['40', '41', '42', '43'],
      colors: ['Black'],
      details: {
        material: '100% grapes  Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];

  ngOnInit(): void {}
  router = inject(Router);
  search: any = {
    name: ['men', 'shoes'],
    category: ['clothing', 'accessories'],
  };
  filterProduct: any[] = [];

  getAllNewArrive() {
    return this.NewArrive;
  }
  runSearch(term: string) {
    const text = term.toLowerCase();
    this.router.navigate(['search', text]);
  }
  Items = inject(CartService);
  removeItem(item: any) {
    this.cart = this.cart.filter((i) => i !== item);
  }
  updateQuantity = (item: any, qty: number) => {
    if (qty < 1) return;
    const cartItem = this.cart.find((i) => i === item);
    if (cartItem) {
      cartItem.quantity = qty;
    }
  };
  getAllAccessories() {
    return this.Accessories;
  }
  getAllRunning() {
    return this.Running;
  }
  getAllJacket() {
    return this.Jacket;
  }
  getAllLifeStyle() {
    return this.LifeStyle;
  }
  getTotal() {
    return this.Items.items.reduce(
      (sum, i) => sum + i.product.price * i.qty,
      0
    );
  }
  searchItems(term: string) {
    const text = term.toLowerCase();
    return (this.filterProduct = this.items.filter((i) =>
      i.name?.toLowerCase().includes(text)
    ));
  }
  searchShoesItems(term: string) {
    const text = term.toLowerCase();
    return this.shoes.filter((i) => i.name?.toLowerCase().includes(text));
  }

  getAll() {
    return this.items;
  }
  getAllTracksuits() {
    return this.Tracksuit;
  }

  getAllShoes() {
    return this.shoes;
  }
  getAllBasketball() {
    return this.Basketball;
  }
  getCategories() {
    return [...new Set(this.items.map((i) => i.category))];
  }
  getshoesCategory() {
    return [...new Set(this.shoes.map((i) => i.category))];
  }
  getHoodieCategory() {
    return [...new Set(this.Hoodies.map((i) => i.category))];
  }
  getTracksuitCategory() {
    return [...new Set(this.Tracksuit.map((i) => i.category))];
  }
  getJacketCategory() {
    return [...new Set(this.Jacket.map((i) => i.category))];
  }
  getRunningCategory() {
    return [...new Set(this.Running.map((i) => i.category))];
  }
  getBasketballCategory() {
    return [...new Set(this.Basketball.map((i) => i.category))];
  }
  getLifeStyleCategory() {
    return [...new Set(this.LifeStyle.map((i) => i.category))];
  }
  getAcCategory() {
    return [...new Set(this.Accessories.map((i) => i.category))];
  }
  getAcById(id: number) {
    return this.Accessories.find((p) => p.id === id);
  }
  getById(id: number) {
    return this.items.find((p) => p.id === id);
  }
  getByShoesId(id: number) {
    debugger;
    return this.shoes.find((p) => p.id === id);
  }
  getByHoodieId(id: number) {
    debugger;
    return this.Hoodies.find((p) => p.id === id);
  }
  getByJacketId(id: number) {
    debugger;
    return this.Jacket.find((p) => p.id === id);
  }
  getByTracksuitId(id: number) {
    debugger;
    return this.Tracksuit.find((p) => p.id === id);
  }
  getByAcId(id: number) {
    return this.Accessories.find((ac) => ac.id === id);
  }
  getJacketById(id: number) {
    return this.Jacket.find((p) => p.id === id);
  }
  getRunningById(id: number) {
    return this.Running.find((p) => p.id === id);
  }
  getLifeStyleById(id: number) {
    return this.LifeStyle.find((p) => p.id === id);
  }
  getRunningByCategory(c: string) {
    return c === 'All'
      ? this.Running
      : this.Running.filter((p) => p.category === c);
  }
  getAcByCategory(c: string) {
    return c === 'All'
      ? this.Accessories
      : this.Accessories.filter((p) => p.category === c);
  }
  getLifeStyleByCategory(c: string) {
    return c === 'All'
      ? this.LifeStyle
      : this.LifeStyle.filter((p) => p.category === c);
  }
  getBasketballById(id: number) {
    return this.Basketball.find((p) => p.id === id);
  }
  getBasketballByCategory(c: string) {
    return c === 'All'
      ? this.Basketball
      : this.Basketball.filter((p) => p.category === c);
  }
  getByCategory(c: string) {
    return c === 'All'
      ? this.items
      : this.items.filter((p) => p.category === c);
  }
  getJacketByCategory(c: string) {
    return c === 'All'
      ? this.Jacket
      : this.Jacket.filter((p) => p.category === c);
  }
  getByShoesCategory(c: string) {
    return c === 'All'
      ? this.shoes
      : this.shoes.filter((p) => p.category === c);
  }
  getByHoodieCategory(c: string) {
    return c === 'All'
      ? this.Hoodies
      : this.Hoodies.filter((p) => p.category === c);
  }
  getByTrackCategory(c: string) {
    return c === 'All'
      ? this.Tracksuit
      : this.Tracksuit.filter((p) => p.category === c);
  }

  getAllHoodies() {
    return this.Hoodies;
  }

  addtocart(item: any) {
    this.cart.push(item);
  }
}
