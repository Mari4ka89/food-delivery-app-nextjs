"use server";
import CartItem from "models/cartItem";
import { connectToDB } from "@/utils/database";
import type { MenuItemProps } from "../types/index";

export const addToCart = async (item: MenuItemProps) => {
  try {
    await connectToDB();
    await CartItem.create(item);
  } catch (error) {
    return { error: error.message };
  }
};
