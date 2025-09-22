export interface Product {
  id: number;
  name: string;
  category: 'Graphic T-Shirts' | 'Long Sleeve Shirts' | 'Short Sleeve Shirts';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}
export interface Hoodie {
  id: number;
  name: string;
  category: 'Crew Neck' | 'Hoodies' | 'Sweatshirts';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}
export interface Tracksuits {
  id: number;
  name: string;
  category: 'Tracksuit Tops' | 'Tracksuit Bottoms' | 'Tracksuit Sets';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}
export interface Shoes {
  id: number;
  name: string;
  category: 'Lifestyle' | 'Jordan' | 'Running' | 'Basketball';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}
export interface Accessory {
  id: number;
  name: string;
  category: 'Bags' | 'Hats' | 'Accessories' | 'Socks';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}
