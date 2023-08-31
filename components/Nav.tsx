import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <Link href="/shop" className="p-3 inline-block">
          Shop
        </Link>
        <Link href="/cart" className="p-3 inline-block">
          Shopping Cart
        </Link>
      </div>
    </nav>
  );
}
