"use client";
import { ChangeEvent } from "react";
import { updateItemQuantity } from "@/lib/actions";
import { MenuItem } from "@/lib/types";

type QuantityInputProps = {
  id: MenuItem["id"];
  quantity: MenuItem["quantity"];
};

const QuantityInput = ({ quantity, id }: QuantityInputProps) => {
  return (
    <input
      type="number"
      className="bordered w-1/2"
      onChange={async (e: ChangeEvent<HTMLInputElement>) => {
        await updateItemQuantity(id, parseInt(e.target.value || "0"));
      }}
      defaultValue={quantity}
      min="0"
    />
  );
};

export default QuantityInput;
