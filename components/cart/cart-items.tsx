import type { MenuItems, MenuItem } from "@/lib/types";
import QuantityInput from "./quantity-input";

const CartItem = ({ product }: { product: MenuItem }) => {
  const { image, title, price, quantity, id } = product;

  return (
    <li className="flex">
      <img
        src={image}
        alt={title}
        className="h-48 w-48 object-cover object-center"
      />
      <div>
        <h5>{title}</h5>
        <h6>Price: {price}₴</h6>
        <QuantityInput quantity={quantity} id={id} />
      </div>
    </li>
  );
};

const CartItems = ({ products }: { products: MenuItems }) => {
  return Array.isArray(products) && products.length ? (
    <ul>
      {products.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </ul>
  ) : (
    <p>Your cart is empty</p>
  );
};

export default CartItems;
