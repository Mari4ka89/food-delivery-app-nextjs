import { Schema, model, models } from "mongoose";
import { MenuItem } from "@/lib/types";

const CartItemSchema = new Schema<MenuItem>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  image: String,
  title: String,
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: String,
});

const CartItem = models.CartItem || model("CartItem", CartItemSchema);

export default CartItem;
