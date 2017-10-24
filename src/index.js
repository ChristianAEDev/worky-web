import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto'; // eslint-disable-line
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import App from './App';
import reducers from './RoodReducer';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);
registerServiceWorker();
