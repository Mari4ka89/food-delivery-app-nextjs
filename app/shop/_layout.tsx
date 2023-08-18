// TODO: update layout
import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  vendors: string[];
  children: ReactNode;
};

export default function ShopLayout({ vendors, children }: Props) {
  return (
    <div className="basis-1/3">
      ShopLayout
      <ul>
        {vendors.map((vendorId) => (
          <li key={vendorId}>
            <Link href={`/shop/${vendorId}`}>{vendorId}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
