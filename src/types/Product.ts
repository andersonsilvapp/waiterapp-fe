export interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  isActive: boolean;
  imagePath: string;
  price: number;
  ingredients: {
    id: string;
    name: string;
    icon: string;
  }[];
}
