import { Metadata } from "next";
import { API_URL } from "../../api/vendors/getVendors";

type MenuItemsProps = {
  params: {
    vendorId: string;
  };
};

async function getMenuItems(vendorId: string) {
  const response = await fetch(`${API_URL}products/category/${vendorId}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

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
      Products {vendorId}:
      <ul>
        {menuItems.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
