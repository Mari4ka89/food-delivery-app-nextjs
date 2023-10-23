"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import type { MenuItemProps } from "./../types/index";
import { addToCart } from "actions/addToCart";
import { toast } from "react-hot-toast";

const MenuItem = ({ title, price, image, category, id }: MenuItemProps) => {
  return (
    <div className="bordered p-4">
      <div className="w-full h-80 relative">
        <Image src={image} alt={title} fill priority />
      </div>

      <div className="flex justify-between pt-4">
        <div>
          <h5>{title}</h5>
          <h6>{price}₴</h6>
        </div>
        <Button
          onClick={async () => {
            const result = await addToCart({
              id,
              title,
              price,
              image,
              category,
              quantity: 1,
            });

            if (result?.error) {
              toast.error(result.error);
            }
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
