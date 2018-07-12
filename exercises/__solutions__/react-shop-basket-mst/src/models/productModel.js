export default class Product {
  constructor(data) {
    Object.assign(this, data);
  }

  isNew() {
    if (!this.id) {
      return false;
    }
    return true;
  }
}
