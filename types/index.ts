export type Product = {
  image: string;
  title: string;
  price: number;
};

export type MenuItemProps = Product & {
  id: number;
  quantity: number;
  category: string;
};
