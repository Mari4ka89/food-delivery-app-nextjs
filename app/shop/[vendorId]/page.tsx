import { Metadata } from "next";
import { getMenuItems } from "@/app/api/menuItems/getMenuItems";
import MenuItem from "@/components/MenuItem";

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

  return menuItems.map((item: any) => <MenuItem key={item.id} {...item} />);
}
