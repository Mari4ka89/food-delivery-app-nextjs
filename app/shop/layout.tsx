import { ReactNode } from "react";
import { getVendors } from "@/app/api/vendors/getVendors";
import ShopMenuLink from "@/components/ShopMenuLink";

type ShopLayoutProps = {
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
            <ShopMenuLink key={vendorId} vendorId={vendorId} />
          ))}
        </ul>
      </div>
      <div className="basis-3/4 bordered overflow-auto py-4 px-16">
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">{children}</div>
      </div>
    </>
  );
}
