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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      description: 'Full-grain leather with brushed metal buckle.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
    },
    {
      id: 6,
      name: 'Aviator Sunglasses',
      category: 'Graphic T-Shirts',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];
  public shoes: Shoes[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Basketball',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Classic Black ',
      category: 'Lifestyle',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5cb8cc0-adff-444e-a945-8ab9107b690b/JORDAN+SPIZIKE+LOW.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 3,
      name: 'Classic Black ',
      category: 'Running',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5cb8cc0-adff-444e-a945-8ab9107b690b/JORDAN+SPIZIKE+LOW.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 4,
      name: 'Classic Black ',
      category: 'Jordan',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5cb8cc0-adff-444e-a945-8ab9107b690b/JORDAN+SPIZIKE+LOW.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89a0437e-bd82-488b-8f36-ec218e44257f/AIR+JORDAN+5+RETRO+OG.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5cb8cc0-adff-444e-a945-8ab9107b690b/JORDAN+SPIZIKE+LOW.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5cb8cc0-adff-444e-a945-8ab9107b690b/JORDAN+SPIZIKE+LOW.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a5cb8cc0-adff-444e-a945-8ab9107b690b/JORDAN+SPIZIKE+LOW.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
