import React, {
  Component,
} from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import Product from './Product';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="flex-grid">
        {products.map(product => (
          <div className="col" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    );
  }
}
