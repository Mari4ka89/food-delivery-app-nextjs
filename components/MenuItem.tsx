"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import type { Product } from "./../types/index";

const MenuItem = ({
  title,
  price,
  image, // category, id
}: Product) => {
  const handleAddToCart = () => {};

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
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default MenuItem;
