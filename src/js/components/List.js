// src/js/components/List.js

import { connect } from 'react-redux';
import { ConnectedList } from './ConnectedList';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List
