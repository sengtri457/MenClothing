import { Injectable } from '@angular/core';
import { Clothings } from '../models/Main';

@Injectable({
  providedIn: 'root',
})
export class MainServices {
  public Clothing: Clothings[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Tshirt',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
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
      category: 'Tshirt',
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
      category: 'Hoodie',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
      category: 'Hoodie',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
      category: 'Hoodie',
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
      name: 'Aviator Sunglasses',
      category: 'Jacket',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
      name: 'Aviator Sunglasses',
      category: 'Jacket',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
      name: 'Aviator Sunglasses',
      category: 'Jacket',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
  getAllClothing() {
    return this.Clothing;
  }
  getClothingCategory() {
    return [...new Set(this.Clothing.map((i) => i.category))];
  }
  getClothingById(id: number) {
    return this.Clothing.find((p) => p.id === id);
  }
  getClothingByCategory(c: string) {
    return c === 'All'
      ? this.Clothing
      : this.Clothing.filter((p) => p.category === c);
  }
  public Shoes: Clothings[] = [
    {
      id: 1,
      name: 'Classic Black Leather Jacket',
      category: 'Tshirt',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
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
      category: 'Tshirt',
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
      category: 'Hoodie',
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
      category: 'Hoodie',
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
      category: 'Hoodie',
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
      category: 'Jacket',
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
    {
      id: 7,
      name: 'Aviator Sunglasses',
      category: 'Jacket',
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
  getAllShoes() {
    return this.Shoes;
  }
  getShoesCategory() {
    return [...new Set(this.Shoes.map((i) => i.category))];
  }
  getShoesById(id: number) {
    return this.Shoes.find((p) => p.id === id);
  }
  getShoesByCategory(c: string) {
    return c === 'All'
      ? this.Shoes
      : this.Shoes.filter((p) => p.category === c);
  }
}
