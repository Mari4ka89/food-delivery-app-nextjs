import { Metadata } from "next";
import { fetchCartItems } from "@/lib/data";
import type { MenuItems } from "@/lib/types";
import CartItems from "@/components/cart/cart-items";

const mainBlocks = "basis-1/2 bordered text-center p-4";

export const metadata: Metadata = {
  title: "Cart | Food Delivery",
};

export default async function Cart() {
  const products = (await fetchCartItems()) as MenuItems;

  return (
    <>
      <div className={mainBlocks}>Form</div>
      <div className={`${mainBlocks} overflow-auto`}>
        <CartItems products={products} />
      </div>
    </>
  );
}
