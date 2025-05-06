// index.js
import { Product } from './models/Product.js';
import { getAllProducts, getProductById, createProduct, deleteProduct } from './services/apiService.js';

const [, , method, resource, ...params] = process.argv;

(async () => {
  if (method === 'GET' && resource === 'products') {
    if (params.length === 0) {
      const products = await getAllProducts();
      console.log(products);
    } else {
      const id = params[0];
      const product = await getProductById(id);
      console.log(product);
    }
  }

  if (method === 'POST' && resource === 'products') {
    const [title, price, category] = params;
    const newProduct = new Product(title, parseFloat(price), category);
    const result = await createProduct(newProduct);
    console.log(result);
  }

  if (method === 'DELETE' && resource === 'products' && params.length === 1) {
    const id = params[0];
    const result = await deleteProduct(id);
    console.log(result);
  }
})();
