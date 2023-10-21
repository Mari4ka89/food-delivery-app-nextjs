import { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

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
