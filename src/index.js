import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
