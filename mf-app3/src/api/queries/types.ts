// Product type
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  creationAt: string;
  updatedAt: string;
};

export interface QueryState {
  data: Product[];
  paginate: (data: Product) => void;
}