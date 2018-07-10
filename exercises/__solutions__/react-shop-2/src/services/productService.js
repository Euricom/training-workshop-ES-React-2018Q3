import api from './api';
import Product from '../models/productModel';

export async function getAll() {
  const res = await api.get('products');
  return res.data.selectedProducts.map(dto => new Product(dto));
}

export async function getById(id: string) {
  const res = await api.get(`products/${id}`);
  return new Product(res.data);
}

export async function save(product: Product) {
  console.log('Save is not supported', product);
}
