"use client";
import { addToCart } from "@/lib/actions";
import Button from "@/components/button";
import type { MenuItem } from "@/lib/types";

const AddToCartBtn = ({ item }: { item: MenuItem }) => {
  return (
    <Button
      onClick={async () => {
        await addToCart(item);
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
