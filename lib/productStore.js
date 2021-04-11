import ProductData from "../data/products.json";

export const getAllProducts = () => {
  return ProductData;
}

export const getByProductId = (productId) => {
  return ProductData.find(product => product.id === productId);
}
