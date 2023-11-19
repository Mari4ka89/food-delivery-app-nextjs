import { ReactNode } from "react";
import { getVendors } from "@/lib/data";
import ShopMenuLink from "@/components/shop/shop-menu-link";

type ShopLayoutProps = {
  children: ReactNode;
};

const mainBlocksClasses = "bordered text-center py-4 px-16";

export default async function ShopLayout({ children }: ShopLayoutProps) {
  const vendors = await getVendors();

  return (
    <>
      <div className={`basis-1/4 ${mainBlocksClasses}`}>
        <h2>Shops:</h2>
        <ul>
          {vendors?.map((vendorId: string) => (
            <ShopMenuLink key={vendorId} vendorId={vendorId} />
          ))}
        </ul>
      </div>
      <div className={`basis-3/4 overflow-auto ${mainBlocksClasses}`}>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">{children}</div>
      </div>
    </>
  );
}
