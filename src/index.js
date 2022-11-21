import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';

import store2 from './REDUX2/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store2}>
    <App />
  </Provider>
);

