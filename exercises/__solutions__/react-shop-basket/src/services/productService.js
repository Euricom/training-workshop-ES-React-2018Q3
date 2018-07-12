import api from './api';
import Product from '../models/productModel';

export async function getAll() {
  try {
    const res = await api.get('products');
    return res.data.selectedProducts.map(dto => new Product(dto));
  } catch (error) {
    // return empty array
    return [];
  }
}

export async function getById(id: string) {
  const res = await api.get(`products/${id}`);
  return new Product(res.data);
}

export async function save(product: Product) {
  console.log('Save is not yet supported', product);
}
