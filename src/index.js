import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/rootReducer';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
