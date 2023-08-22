import { ReactNode } from "react";
import Link from "next/link";
import { getVendors } from "../api/vendors/getVendors";

type ShopLayoutProps = {
  vendors: string[];
  children: ReactNode;
};

export default async function ShopLayout({ children }: ShopLayoutProps) {
  const vendors = await getVendors();

  return (
    <>
      <div className="basis-1/3">
        <h2 className="text-center">Shops:</h2>
        <ul>
          {vendors?.map((vendorId: string) => (
            <li key={vendorId}>
              <Link href={`/shop/${vendorId}`}>{vendorId}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-2/3">{children}</div>
    </>
  );
}
