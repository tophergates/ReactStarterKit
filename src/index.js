import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Routes from './routes';

render(
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>,
  document.querySelector('#app')
);
