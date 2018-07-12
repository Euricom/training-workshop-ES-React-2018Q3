import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import AppStore from './store';

import App from './App';

const appStore = AppStore.create();
console.log('appStore:', appStore.toJSON());

console.log(appStore);

ReactDOM.render(<App />, document.getElementById('root'));
