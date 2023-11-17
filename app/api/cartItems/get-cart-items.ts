import "server-only";
import CartItem from "@/models/cart-item";
import { connectToDB } from "@/utils/database";
import type { MenuItem } from "@/lib/types";

export async function getCartItems() {
  try {
    await connectToDB();

    const cartItems = (await CartItem.find({})) as MenuItem[];

    return cartItems;
  } catch (error) {
    return { error: error.message };
  }
}
