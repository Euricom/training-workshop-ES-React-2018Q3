import React, { Component } from 'react';

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

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Products</h2>
        <div className="flex-grid">
          {products.map(product => (
            <div className="col" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
