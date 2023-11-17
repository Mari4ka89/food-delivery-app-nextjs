"use client";
import { addToCart } from "@/actions/addToCart";
import Button from "@/components/Button";

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
