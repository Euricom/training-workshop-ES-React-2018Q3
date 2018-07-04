import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import MyComponent from './components/MyComponent';

// eslint-disable-next-line
class App extends React.Component {
  name = 'test';

  constructor() {
    super();
    this.title = 'MyComponentTitle';
    this.customers = [
      { id: 1, name: 'consonto' },
      { id: 2, name: 'bellware' },
      { id: 3, name: 'sultana' },
    ];
  }

  render() {
    return (
      <div>
        <MyComponent title={this.title} data={this.customers} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
