import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import rootReducer from './reducers';
import thunk from 'redux-thunk';
// import { BrowserRouter, Route } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('root'));
