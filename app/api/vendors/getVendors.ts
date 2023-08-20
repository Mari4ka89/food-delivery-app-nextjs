import "server-only";

export async function getVendors() {
  const response = await fetch(`${process.env.API_URL}products/categories`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch vendors.");
  }

  return (await response.json()) as string[];
}
