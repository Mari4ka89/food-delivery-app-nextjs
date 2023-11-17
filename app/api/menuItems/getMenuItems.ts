import "server-only";
import { notFound } from "next/navigation";
import { MenuItem } from "lib/types";

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
