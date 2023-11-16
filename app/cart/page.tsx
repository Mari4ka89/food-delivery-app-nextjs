import { Metadata } from "next";
import { getCartItems } from "../api/cartItems/getCartItems";
import { MenuItem } from "../../lib/types";

export const metadata: Metadata = {
  title: "Cart | Food Delivery",
};

export default async function Cart() {
  const products = (await getCartItems()) as MenuItem[];

  return (
    <>
      <div className="basis-1/2 bordered text-center p-4">Form</div>
      <div className="basis-1/2 bordered text-center p-4">
        {Array.isArray(products) && products.length ? (
          <ul>
            {products.map(({ id, title, image, price, quantity }) => (
              <li key={id} className="flex">
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
            ))}
          </ul>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </>
  );
}
