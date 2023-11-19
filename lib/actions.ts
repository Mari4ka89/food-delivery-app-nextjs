"use server";
import { revalidatePath } from "next/cache";
import type { MenuItem } from "@/lib/types";
import CartItem from "@/models/cart-item";
import { connectToDB } from "@/utils/database";

export const addToCart = async (item: MenuItem) => {
  try {
    await connectToDB();

    await CartItem.findOneAndUpdate(
      { id: item.id },
      {
        $set: {
          title: item.title,
          price: item.price,
          image: item.image,
          category: item.category,
        },
        $inc: { quantity: 1 },
      },
      {
        new: true,
        upsert: true,
      }
    );
    revalidatePath("/cart", "layout");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add item to cart.");
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
    revalidatePath("/cart", "layout");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update cart item quantity.");
  }
};
