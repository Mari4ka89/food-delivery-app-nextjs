import { Schema, model, models } from "mongoose";
import { MenuItemProps } from "../types";

const CartItemSchema = new Schema<MenuItemProps>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: {
    type: String,
  },
});

const CartItem = models.CartItem || model("CartItem", CartItemSchema);

export default CartItem;
