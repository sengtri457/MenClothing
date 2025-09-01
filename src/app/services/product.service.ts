import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private items: Product[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Clothing',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25c19e95-faba-48e7-97a0-f3e0f0428972/M+J+FLT+ESS+85+SS+CREW.png',
      description:
        'Premium leather jacket with modern fit and durable hardware.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
    },
    {
      id: 2,
      name: 'Slim Fit White Oxford Shirt',
      category: 'Clothing',
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
      category: 'Shoes',
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
      category: 'Shoes',
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
      category: 'Accessories',
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
      category: 'Accessories',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9e45cb32-9979-4955-b5a7-58e38678d718/M+J+DF+SPRT+GFX+SS+CREW.png',
      description: 'UV400 lenses with lightweight metal frame.',
    },
  ];

  getAll() {
    return this.items;
  }
  getCategories() {
    return [...new Set(this.items.map((i) => i.category))];
  }
  getById(id: number) {
    return this.items.find((p) => p.id === id);
  }
  getByCategory(c: string) {
    return c === 'All'
      ? this.items
      : this.items.filter((p) => p.category === c);
  }
}
