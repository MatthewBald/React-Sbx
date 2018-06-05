// src/js/index.js

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './components/App';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
} from './actions/index';

import { VisibilityFilters } from './constants/action-types';

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
