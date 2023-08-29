import { Metadata } from "next";
import { getMenuItems } from "app/api/menuItems/getMenuItems";

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
    <ul>
      {menuItems.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
