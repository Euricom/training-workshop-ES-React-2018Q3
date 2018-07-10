import api from './api';
import Basket from '../models/basketModel';

export async function get() {
  const res = await api.get(`basket/abc`);
  return new Basket(res.data);
}

export async function save(basket) {
  console.log('Save is not supported', basket);
}
