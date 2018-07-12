import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import eventBus from 'pubsub-js';

import Products from './components/Products';
import Basket from './components/Basket';

class App extends Component {
  constructor(props) {
    super(props);

    eventBus.subscribe('error', (msg, data) => {
      console.log('ERROR', msg, data);
      toast.error(data.message);
    });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <h1>Web Shop</h1>
        <div className="row">
          <div className="col-md-8">
            <Products />
          </div>
          <div className="col-md-4">
            <Basket />
          </div>
        </div>
        <ToastContainer autoClose={5000} position="bottom-right" />
      </div>
    );
  }
}

export default App;
