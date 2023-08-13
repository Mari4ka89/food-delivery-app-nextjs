import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Shop</Link>
        <Link href="/cart">Shopping Cart</Link>
      </nav>
    </header>
  );
}
