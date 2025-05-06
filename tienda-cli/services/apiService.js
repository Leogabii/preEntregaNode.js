// services/apiService.js
const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};
