// src/js/Calculator/CalculatorScreen.jsx

import React from 'react';
import PropTypes from 'prop-types';

const CalculatorScreen = props => (
  <input
    className="form-control"
    value={props.arithmetic}
    onChange={props.updateArithmetic}
  />
);

CalculatorScreen.propTypes = {
  arithmetic: PropTypes.string.isRequired,
  updateArithmetic: PropTypes.func.isRequired,
};

export default CalculatorScreen;
