import "server-only";

// TODO: extract to env variable
export const API_URL = "https://dungarees-crow.cyclic.app/api/";

export async function getVendors() {
  const response = await fetch(`${API_URL}products/categories`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch vendors.");
  }

  return response.json();
}
