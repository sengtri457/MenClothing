import { inject, Injectable } from '@angular/core';
import { Clothings } from '../models/Main';
import { HttpClient } from '@angular/common/http';

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
      name: 'Nike Sportwear',
      category: 'Hoodie',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7d98618-95c1-4d57-8f71-883893ec011b/M+NSW+SF+FZ+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7d98618-95c1-4d57-8f71-883893ec011b/M+NSW+SF+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df1deeae-be3c-4a36-b055-88eb9a18b696/M+NSW+SF+FZ+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6f549096-0326-41f1-9e0b-040157e4c9cc/M+NSW+SF+FZ+HOODIE.png',
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
      name: 'Nike Solo Swoosh',
      category: 'Hoodie',
      price: 129,
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
      name: 'Nike Club',
      category: 'Hoodie',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17aca148-0178-4886-b536-6a70ecbfa1a7/M+NK+CLUB+BB+PO+HOODIE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17aca148-0178-4886-b536-6a70ecbfa1a7/M+NK+CLUB+BB+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f696096e-081a-4f97-baa4-ede494774483/M+NK+CLUB+BB+PO+HOODIE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e09fa0f1-143d-4fdc-a856-aa5b932f08d9/M+NK+CLUB+BB+PO+HOODIE.png',
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
      id: 6,
      name: 'Nike Sportswear',
      category: 'Jacket',
      price: 59,
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
      id: 7,
      name: 'Nike Unlimited',
      category: 'Jacket',
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
      name: 'Nike Impossibl',
      category: 'Jacket',
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

  // telegramBot
  private botToken = '8381384729:AAG8ImnfH_7qEeg5kDepce42PY0-v0hBYmA';
  private chatId = '-4899537261';

  http = inject(HttpClient);

  sendMessage(msg: any) {
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
    const body = {
      chat_id: this.chatId,
      text: msg,
    };
    return this.http.post(url, body);
  }
  sendPhoto(photoUrl: string, caption: string) {
    const url = `https://api.telegram.org/bot${this.botToken}/sendPhoto`;
    const body = {
      chat_id: this.chatId,
      photo: photoUrl,
      caption,
      parse_mode: 'Markdown',
    };

    return this.http.post(url, body);
  }
  sendCustomer(msg: any) {
    const url = `https://api.telegram.org/bot${this.botToken}/sendPhoto`;
    const body = {
      chat_id: this.chatId,
      photo: msg,
      parse_mode: 'Markdown',
    };

    return this.http.post(url, body);
  }
}
