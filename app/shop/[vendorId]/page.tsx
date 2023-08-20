import { Metadata } from "next";
import { getMenuItems } from "../../api/menuItems/getMenuItems";

type MenuItemsProps = {
  params: {
    vendorId: string;
  };
};

export async function generateMetadata({
  params: { vendorId },
}: MenuItemsProps): Promise<Metadata> {
  return {
    title: vendorId,
  };
}

export default async function MenuItems({
  params: { vendorId },
}: MenuItemsProps) {
  const menuItems = await getMenuItems(vendorId);

  return (
    <div>
      MenuItems {vendorId}:
      <ul>
        {menuItems.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
