import { Metadata } from "next";
import { fetchCartItems } from "@/lib/data";
import type { MenuItems } from "@/lib/types";
import CartItems from "@/components/cart/cart-items";

export const metadata: Metadata = {
  title: "Cart | Food Delivery",
};

export default async function Cart() {
  const products = (await fetchCartItems()) as MenuItems;

  return (
    <>
      <div className="basis-1/2 bordered text-center p-4">Form</div>
      <div className="basis-1/2 bordered text-center p-4">
        <CartItems products={products} />
      </div>
    </>
  );
}
