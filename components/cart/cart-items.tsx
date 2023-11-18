import type { MenuItems, MenuItem } from "@/lib/types";

const CartItem = ({ product }: { product: MenuItem }) => {
  const { image, title, price, quantity } = product;
  return (
    <li className="flex">
      <img
        src={image}
        alt={title}
        className="h-48 w-48 object-cover object-center"
      />
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{quantity}</p>
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
