import api from './api';
import Basket from '../models/basketModel';

export async function get() {
  try {
    const res = await api.get(`basket/abc`);
    return new Basket(res.data);
  } catch (error) {
    // return empty basket
    return new Basket();
  }
}

export async function save(basket) {
  console.log('Save is not yet supported', basket);
}
