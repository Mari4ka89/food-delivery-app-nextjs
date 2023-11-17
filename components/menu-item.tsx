import React from "react";
import Image from "next/image";
import type { MenuItemProps } from "@/lib/types";
import AddToCartBtn from "@/app/cart/add-to-cart-btn";

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
        <AddToCartBtn item={{ title, price, image, category, id }} />
      </div>
    </div>
  );
};

export default MenuItem;
