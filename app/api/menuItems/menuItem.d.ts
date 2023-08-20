import type { Product } from "./product";

type MenuItem = Product & {
  productId: string;
  quantity: number;
};
