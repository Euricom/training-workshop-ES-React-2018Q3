export class BasketItem {
  constructor(data) {
    this.quantity = 0;
    this.price = 0;
    this.total = 0;

    if (data) {
      Object.assign(this, data);
    }
  }

  setProductInfo(product) {
    this.title = product.title;
    this.price = product.price;
    this.total = this.quantity * product.price;
  }

  addQuantity(quantity) {
    this.quantity += quantity;
    this.total = this.quantity * this.price;
  }
}

export default class Basket {
  items = [];

  constructor(data) {
    this.items = [];
    if (data) {
      this.items = data.map(item => new BasketItem(item));
      this.updateTotalPrice();
    }
  }

  addProduct(product, quantity) {
    let item = this.items.find(x => x.id === product.id);
    if (!item) {
      // new
      item = new BasketItem({
        id: product.id,
        quantity: 0,
      });
      item.setProductInfo(product);
      this.items = [...this.items, item];
    }
    item.addQuantity(quantity);
    this.updateTotalPrice();
  }

  updateProductInfo(product) {
    const item = this.items.find(x => x.id === product.id);
    if (item) {
      item.setProductInfo(product);
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.total, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
