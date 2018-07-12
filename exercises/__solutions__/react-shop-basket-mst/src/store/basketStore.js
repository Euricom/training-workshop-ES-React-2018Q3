/* eslint-disable no-param-reassign */

import { types, flow } from 'mobx-state-tree';
import api from '../services/api';

export const BasketItem = types.model('BasketItem', {
  id: types.string,
  productId: types.string,
});

export const BasketStore = types
  .model('BasketStore', {
    isLoading: false,
    items: types.array(BasketItem),
  })
  .actions(self => ({
    loadBasket: flow(function* loadBasket() {
      try {
        self.isLoading = true;
        const res = yield api.get('basket/abc');
        self.items = res.data;
      } catch (err) {
        console.error('Failed to load books ', err);
      } finally {
        self.isLoading = false;
      }
    }),
  }));
