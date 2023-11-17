"use server";
import CartItem from "@/models/CartItem";
import { connectToDB } from "@/utils/database";
import type { MenuItem } from "../lib/types";

export const addToCart = async (item: MenuItem) => {
  try {
    await connectToDB();
    await CartItem.create(item);
  } catch (error) {
    return { error: error.message };
  }
};
