"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const MenuItem = ({
  info: { title, price, image }, // category, id
}) => {
  const handleAddToCart = () => {};

  return (
    <div className="bordered p-4">
      <Image src={image} alt={title} height={200} width={400} />

      <div className="flex justify-between">
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