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
      name: 'Classic Black Leather Jacket',
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
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
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
      colors: ['White'],
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
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
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
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
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
      colors: ['Black', 'Brown'],
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
      name: 'Classic Black Leather Jacket',
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
      name: 'Classic Black Leather Jacket',
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
      name: 'Classic Black Leather Jacket',
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
      name: 'Classic Black Leather Jacket',
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
      name: 'Classic Black Leather Jacket',
      category: 'Sweatshirts',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Crew Neck',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Hoodies',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'Hoodies',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Crew Neck',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Crew Neck',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];
  public Tracksuit: Tracksuits[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Tracksuit Sets',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Tracksuit Tops',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Tracksuit Bottoms',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'Tracksuit Bottoms',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Tracksuit Sets',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Tracksuit Sets',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];
  public Jacket: Jackets[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Windbreakers',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Parka Jackets',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Parka Jackets',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'Bomber Jackets',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Bomber Jackets',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Parka Jackets',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];
  public Running: Runnings[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Road Running',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Trail Running',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Trail Running',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'Road Running',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Athletics',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Athletics',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];
  public Basketball: Basketballs[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Jordan',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Kobe Bryant',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Jordan',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'LeBron James',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Kobe Bryant',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'LeBron James',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];
  public LifeStyle: LifeStyles[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Nike Dunk',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
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
      category: 'Air Force',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
    },
    {
      id: 3,
      name: 'Minimalist Sneakers',
      category: 'Jordan',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Clean silhouette, cushioned insole, everyday comfort.',

      sizes: ['40', '41', '42', '43', '44'],
      colors: ['White', 'Black'],
    },
    {
      id: 4,
      name: 'Chelsea Boots',
      category: 'Jordan',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Suede upper, elastic side panels, classic almond toe.',
      sizes: ['40', '41', '42', '43', '44'],
      colors: ['Brown', 'Black'],
    },
    {
      id: 5,
      name: 'Leather Belt',
      category: 'Air Force',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Jordan',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
