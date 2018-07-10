import React, { Component } from 'react';

import Products from './components/Products';
import Basket from './components/Basket';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
