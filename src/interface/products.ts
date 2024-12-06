export interface IProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  colors?: string[];
  sizes?: string[];
  image: string;
  imageDetail?: string[];
  ratings: number;
  reviewCount: number;
  stock: number;
  isFlashSale: boolean;
  bestSelling: boolean;
  isNew: boolean;
  discount?: number;
}
