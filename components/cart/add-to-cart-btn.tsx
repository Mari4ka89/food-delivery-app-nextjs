"use client";
import { addToCart } from "@/lib/actions";
import Button from "@/components/button";
import { MenuItem } from "@/lib/types";

const AddToCartBtn = ({ item }: { item: Omit<MenuItem, "quantity"> }) => {
  return (
    <Button
      onClick={async () => {
        await addToCart({ ...item, quantity: 1 });
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
