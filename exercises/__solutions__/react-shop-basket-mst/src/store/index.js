import { types } from 'mobx-state-tree';
import { ProductStore } from './productStore';
import { BasketStore } from './basketStore';

export default types
  .model('AppStore', {
    productStore: types.optional(ProductStore, {
      products: [],
    }),
    basketStore: types.optional(BasketStore, {
      items: [],
    }),
  })
  .views(self => ({
    get isLoading() {
      return self.productStore.isLoading;
    },
    get products() {
      return self.productStore.products;
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.productStore.loadProducts();
      self.basketStore.loadbasket();
    },
  }));
