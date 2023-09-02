import { Metadata } from "next";
import { getMenuItems } from "app/api/menuItems/getMenuItems";
import MenuItem from "components/MenuItem";

type MenuItemsProps = {
  params: {
    vendorId: string;
  };
};

export async function generateMetadata({
  params: { vendorId },
}: MenuItemsProps): Promise<Metadata> {
  return {
    title: `${vendorId} | Food Delivery`,
  };
}

export default async function MenuItems({
  params: { vendorId },
}: MenuItemsProps) {
  const menuItems = await getMenuItems(vendorId);

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
      {menuItems.map((item: any) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
