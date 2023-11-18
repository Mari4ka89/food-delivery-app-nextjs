import "server-only";
import type { MenuItem } from "@/lib/types";
import CartItem from "@/models/cart-item";
import { connectToDB } from "@/utils/database";
import { notFound } from "next/navigation";

export async function fetchCartItems() {
  try {
    await connectToDB();

    const cartItems = (await CartItem.find({})) as MenuItem[];

    return cartItems;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cart items.");
  }
}

export const addToCart = async (item: MenuItem) => {
  try {
    await connectToDB();
    await CartItem.create(item);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add item to cart.");
  }
};

export async function getMenuItems(vendorId: string) {
  const response = await fetch(
    `${process.env.API_URL}products/category/${vendorId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch menu items.");
  }

  const menuItems = (await response.json()) as MenuItem[];

  if (menuItems.length === 0) {
    notFound();
  }

  return menuItems;
}
export async function getVendors() {
  const response = await fetch(`${process.env.API_URL}products/categories`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch vendors.");
  }

  return (await response.json()) as string[];
}
