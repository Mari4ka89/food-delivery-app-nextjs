import { Metadata } from "next";
import Link from "next/link";

// TODO: extract to env variable
export const API_URL = "https://dungarees-crow.cyclic.app/api/";

export const metadata: Metadata = {
  title: "Shop | Food Delivery",
};

async function getVendors() {
  const response = await fetch(`${API_URL}products/categories`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export default async function Shop() {
  const vendors = await getVendors();

  return (
    <>
      <h1>Shop Page</h1>
      <ul>
        {vendors.map((vendorId: string) => (
          <li key={vendorId}>
            <Link href={`/shop/${vendorId}`}>{vendorId}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
