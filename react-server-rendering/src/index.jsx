import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Loading from './js/Loading';
import './index.css';

const App = Loadable({
  loader: () => import('./js/App'),
  loading: Loading,
});

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
