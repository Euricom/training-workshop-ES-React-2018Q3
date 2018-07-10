import React, { Component } from 'react';
import pubsub from 'pubsub-js';

import BasketModel from '../models/basketModel';
import * as basketService from '../services/basketService';
import * as productService from '../services/productService';
import { toCurrency } from '../core/intl';

class Basket extends Component {
  state = {
    basket: new BasketModel(),
  };

  async componentDidMount() {
    const initialBasket = await basketService.get();

    // get app products that are in the basket
    const promises = [];
    initialBasket.items.forEach(item => {
      promises.push(productService.getById(item.id));
    });
    const products = await Promise.all(promises);

    // map all products in the basket
    products.forEach(product => {
      initialBasket.updateProductInfo(product);
    });

    // set state
    this.setState({ basket: initialBasket });

    // subscribe to addProduct event
    pubsub.subscribe('addProduct', (msg, data) => {
      this.setState(state => {
        state.basket.addProduct(data.product, 1);
        return state.basket;
      });
    });
  }

  render() {
    const { basket } = this.state;
    if (basket.isEmpty()) {
      return (
        <div>
          <h2>Basket</h2>
          <span>No Product in Basket</span>
        </div>
      );
    }
    return (
      <div>
        <h2>Basket</h2>
        <div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {basket.items.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{toCurrency(item.price)}</td>
                    <td>{item.quantity}</td>
                    <td>{toCurrency(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>Total: {toCurrency(basket.totalPrice)}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
