"use client";
import { addToCart } from "@/actions/add-to-cart";
import Button from "@/components/button";

const AddToCartBtn = ({ item }) => {
  return (
    <Button
      onClick={async () => {
        const result = await addToCart({ ...item, quantity: 1 });

        if (result?.error) {
          console.log(result.error);
        }
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
