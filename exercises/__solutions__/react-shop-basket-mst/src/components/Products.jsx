import React, { Component } from 'react';
import pubsub from 'pubsub-js';

import * as productService from '../services/productService';
import Product from './Product';

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    productService.getAll().then(products => {
      this.setState({
        products,
      });
    });
  }

  addProduct(product, quantity) {
    pubsub.publish('addProduct', { product, quantity });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Products</h2>
        <div className="flex-grid">
          {products.map(product => (
            <div className="col" key={product.id}>
              <Product product={product} onAdd={quantity => this.addProduct(product, quantity)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
