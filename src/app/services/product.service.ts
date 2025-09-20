import { Accessory } from './../models/product.model';
import { HostListener, inject, Injectable, OnInit } from '@angular/core';
import { Product, Shoes } from '../models/product.model';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

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

  getAllShoes() {
    return this.shoes;
  }
  getCategories() {
    return [...new Set(this.items.map((i) => i.category))];
  }
  getshoesCategory() {
    return [...new Set(this.shoes.map((i) => i.category))];
  }
  getById(id: number) {
    return this.items.find((p) => p.id === id);
  }
  getByShoesId(id: number) {
    debugger;
    return this.shoes.find((p) => p.id === id);
  }
  getByAcId(id: number) {
    return this.Accessories.find((ac) => ac.id === id);
  }
  getByCategory(c: string) {
    return c === 'All'
      ? this.items
      : this.items.filter((p) => p.category === c);
  }
  getByShoesCategory(c: string) {
    return c === 'All'
      ? this.shoes
      : this.shoes.filter((p) => p.category === c);
  }

  addtocart(item: any) {
    this.cart.push(item);
  }
}
