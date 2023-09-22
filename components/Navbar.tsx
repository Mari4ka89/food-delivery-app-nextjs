"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <header>
      <nav>
        <div className="container">
          <Link
            href="/shop"
            className={clsx("p-2 inline-block", {
              "font-bold underline decoration-2":
                currentRoute.includes("/shop"),
            })}
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className={clsx("p-2 inline-block", {
              "font-bold underline decoration-2":
                currentRoute.includes("/cart"),
            })}
          >
            Shopping Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}
