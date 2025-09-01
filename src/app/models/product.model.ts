export interface Product {
  id: number;
  name: string;
  category: 'Clothing' | 'Shoes' | 'Accessories';
  price: number;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}
