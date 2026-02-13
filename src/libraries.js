const getCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();

  if (!Array.isArray(data)) return [];
  return data;
};

const getProducts = async (product_id = null) => {
  let API = 'https://dummyjson.com/products';

  if (product_id !== null) {
    API += `/${product_id}`;   // single product
  }

  const response = await fetch(API);
  const data = await response.json();

  // If fetching single product
  if (product_id !== null) return data;

  // If fetching all products
  return data.products;
};

export { getProducts, getCategories };
