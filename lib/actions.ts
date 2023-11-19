"use server";
import type { MenuItem } from "@/lib/types";
import CartItem from "@/models/cart-item";
import { connectToDB } from "@/utils/database";

export const addToCart = async (item: MenuItem) => {
  try {
    await connectToDB();
    await CartItem.create(item);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add item to cart.");
  }
};

export const deleteCartItem = async (id: MenuItem["id"]) => {
  try {
    await connectToDB();
    await CartItem.findOneAndDelete({ id });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to remove item from cart.");
  }
};

export const updateItemQuantity = async (
  id: MenuItem["id"],
  quantity: MenuItem["quantity"]
) => {
  try {
    await connectToDB();
    await CartItem.findOneAndUpdate(
      { id },
      { quantity },
      { returnOriginal: false }
    );
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update cart item quantity.");
  }
};
