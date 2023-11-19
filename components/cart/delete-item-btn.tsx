"use client";
import { deleteCartItem } from "@/lib/actions";
import { XMarkIcon } from "@heroicons/react/20/solid";
import type { MenuItem } from "@/lib/types";

const DeleteItemBtn = ({ id }: { id: MenuItem["id"] }) => {
  return (
    <XMarkIcon
      className="h-4 w-4 absolute right-1 top-1 cursor-pointer"
      onClick={async () => {
        await deleteCartItem(id);
      }}
    />
  );
};

export default DeleteItemBtn;
