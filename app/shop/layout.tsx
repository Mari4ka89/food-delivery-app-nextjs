import { ReactNode } from "react";
import Link from "next/link";
import { getVendors } from "app/api/vendors/getVendors";

type ShopLayoutProps = {
  vendors: string[];
  children: ReactNode;
};

export default async function ShopLayout({ children }: ShopLayoutProps) {
  const vendors = await getVendors();

  return (
    <>
      <div className="basis-1/4 bordered text-center py-4 px-16">
        <h2>Shops:</h2>
        <ul>
          {vendors?.map((vendorId: string) => (
            <li className="bordered my-4 py-4 px-16" key={vendorId}>
              <Link href={`/shop/${vendorId}`}>{vendorId}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-3/4 bordered overflow-auto py-4 px-16">
        {children}
      </div>
    </>
  );
}
