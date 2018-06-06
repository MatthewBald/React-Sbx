// src/js/index.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/index'
// import App from './components/App'

import 'bootstrap';

import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { selectSubreddit, fetchPosts } from './actions/actions'

store.dispatch(selectSubreddit('reactjs'))
store
  .dispatch(fetchPosts('reactjs'))
  .then(() => console.log(store.getState()))

/*
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
*/