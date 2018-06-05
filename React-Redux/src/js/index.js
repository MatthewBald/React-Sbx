// src/js/index.js

import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './components/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
