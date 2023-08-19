import { Metadata } from "next";
import Link from "next/link";
import { getVendors } from "../api/getVendors";

export const metadata: Metadata = {
  title: "Shop | Food Delivery",
};

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
