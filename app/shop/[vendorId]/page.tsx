import { Metadata } from "next";
import { getMenuItems } from "app/api/menuItems/getMenuItems";
import MenuItem from "components/MenuItem";

type MenuProps = {
  params: {
    vendorId: string;
  };
};

export async function generateMetadata({
  params: { vendorId },
}: MenuProps): Promise<Metadata> {
  return {
    title: `${vendorId} | Food Delivery`,
  };
}

export default async function Menu({ params: { vendorId } }: MenuProps) {
  const menuItems = await getMenuItems(vendorId);

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
      {menuItems.map((item: any) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
}
