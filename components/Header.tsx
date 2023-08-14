import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0">
      <div className="container">
        <Link href="/" className="p-3 inline-block">
          Shop
        </Link>
        <Link href="/cart" className="p-3 inline-block">
          Shopping Cart
        </Link>
      </div>
    </nav>
  );
}
