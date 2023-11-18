import { redirect, notFound } from "next/navigation";
import { getVendors } from "@/lib/data";

export default async function Home() {
  const vendors = await getVendors();

  if (vendors && vendors.length) {
    redirect(`/shop/${vendors[0]}`);
  }

  notFound();
}
