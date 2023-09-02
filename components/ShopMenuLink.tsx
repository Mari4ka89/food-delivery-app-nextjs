"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ShopMenuLinkProps = {
  vendorId: string;
};

const ShopMenuLink = ({ vendorId }: ShopMenuLinkProps) => {
  const path = `/shop/${vendorId}`;
  const currentRoute = usePathname();
  const isActive = path === currentRoute;

  return (
    <li
      key={vendorId}
      className={clsx("bordered my-4 py-4 px-16", {
        "bg-sky-500 text-white": isActive,
      })}
    >
      <Link
        href={path}
        className={clsx({
          "text-white": isActive,
        })}
      >
        {vendorId}
      </Link>
    </li>
  );
};

export default ShopMenuLink;
