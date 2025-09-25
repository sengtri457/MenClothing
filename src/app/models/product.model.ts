export interface Product {
  id: number;
  name: string;
  category: 'Graphic T-Shirts' | 'Long Sleeve Shirts' | 'Short Sleeve Shirts';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Hoodie {
  id: number;
  name: string;
  category: 'Crew Neck' | 'Hoodies' | 'Sweatshirts';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
    details?: {
      material: string;
      fit: string;
      care: string;
      origin: string;
      warranty: string;
    };
  };
}
export interface Tracksuits {
  id: number;
  name: string;
  category: 'Tracksuit Tops' | 'Tracksuit Bottoms' | 'Tracksuit Sets';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Jackets {
  id: number;
  name: string;
  category: 'Bomber Jackets' | 'Parka Jackets' | 'Windbreakers';
  price: number;
  image: string;
  listImage?: string[];

  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Runnings {
  id: number;
  name: string;
  category: 'Road Running' | 'Trail Running' | 'Athletics';
  price: number;
  image: string;
  listImage?: string[];

  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface LifeStyles {
  id: number;
  name: string;
  category: 'Air Force' | 'Nike Dunk' | 'Jordan';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Hats {
  id: number;
  name: string;
  category: 'Caps' | 'Bucket Hats' | 'Beanies';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Bags {
  id: number;
  name: string;
  category: 'Backpack' | 'Duffel' | 'ToteBag';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Socks {
  id: number;
  name: string;
  category: 'Ankle' | 'Crew' | 'Knee High';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Basketballs {
  id: number;
  name: string;
  category: 'LeBron James' | 'Kobe Bryant' | 'Jordan';
  price: number;
  image: string;
  listImage?: string[];

  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Shoes {
  id: number;
  name: string;
  category: 'Lifestyle' | 'Jordan' | 'Running' | 'Basketball';
  price: number;
  image: string;
  listImage?: string[];

  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
export interface Accessory {
  id: number;
  name: string;
  category: 'Bags' | 'Hats' | 'Accessories' | 'Socks';
  price: number;
  image: string;
  listImage?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  details?: {
    material: string;
    fit: string;
    care: string;
    origin: string;
    warranty: string;
  };
}
