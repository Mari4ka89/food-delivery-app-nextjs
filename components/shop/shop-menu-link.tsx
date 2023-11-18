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
      className={clsx("my-4", {
        "bg-sky-500 border-sky-500 text-white rounded-sm": isActive,
        bordered: !isActive,
      })}
    >
      <Link
        href={path}
        className={clsx("w-full h-full block p-4", {
          "text-white": isActive,
        })}
      >
        {vendorId}
      </Link>
    </li>
  );
};

export default ShopMenuLink;
