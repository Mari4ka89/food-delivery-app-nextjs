import "server-only";
import CartItem from "models/CartItem";
import { connectToDB } from "@/utils/database";
import { MenuItem } from "@/types/index";

export async function getCartItems() {
  try {
    await connectToDB();

    const cartItems = (await CartItem.find({})) as MenuItem[];

    return cartItems;
  } catch (error) {
    return { error: error.message };
  }
}
