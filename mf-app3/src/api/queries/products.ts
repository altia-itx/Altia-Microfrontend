// Fetch de productos desde una API con react query
export const fetchData = async (offset: number, limit: number) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
};

// Query para filtrar los productos
export const filterProducts = async (query: string) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?title=${query}`,
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}