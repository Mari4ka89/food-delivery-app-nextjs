import "server-only";

export async function getProducts(vendorId: string) {
  const response = await fetch(
    `${process.env.API_URL}products/category/${vendorId}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch products.");
  }

  return response.json();
}
