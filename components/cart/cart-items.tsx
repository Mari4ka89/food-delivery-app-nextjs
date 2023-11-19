import type { MenuItems, MenuItem } from "@/lib/types";
import QuantityInput from "./quantity-input";
import DeleteItemBtn from "./delete-item-btn";

const CartItem = ({ product }: { product: MenuItem }) => {
  const { image, title, price, quantity, id } = product;

  return (
    <li className="flex bordered mb-4">
      <img
        src={image}
        alt={title}
        className="h-44 w-44 object-cover object-center"
      />
      <div className="grow relative">
        <div className="flex justify-center items-center h-full flex-col">
          <h5>{title}</h5>
          <h6 className="my-1">Price: {price}₴</h6>
          <QuantityInput quantity={quantity} id={id} />
        </div>
        <DeleteItemBtn id={id} />
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
    <p>Your cart is empty.</p>
  );
};

export default CartItems;
