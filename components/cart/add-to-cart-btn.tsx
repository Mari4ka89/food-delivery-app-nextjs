"use client";
import { addToCart } from "@/lib/actions";
import Button from "@/components/button";

const AddToCartBtn = ({ item }) => {
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
