export interface Clothings {
  id: number;
  name: string;
  category: 'Tshirt' | 'Hoodie' | 'Jacket';
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
  category: 'Bag' | 'Sock' | 'Hat';
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
