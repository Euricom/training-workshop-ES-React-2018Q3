/* eslint-disable no-param-reassign */

import { values } from 'mobx';
import { types, getParent, flow } from 'mobx-state-tree';

import api from '../services/api';

export const Product = types.model('Product', {
  id: types.number,
  sku: types.string,
  title: types.string,
  price: types.number,
  basePrice: types.number,
  stocked: true,
});

export const ProductStore = types
  .model('ProductStore', {
    isLoading: false,
    products: types.array(Product),
  })
  .actions(self => ({
    loadProducts: flow(function* loadBooks() {
      try {
        self.isLoading = true;
        const res = yield api.get('products');
        self.products = res.data.selectedProducts;
      } catch (err) {
        console.error('Failed to load books ', err);
      } finally {
        self.isLoading = false;
      }
    }),
  }));
