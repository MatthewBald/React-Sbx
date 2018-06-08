// src/js/Calculator/Calculator.jsx

import React from 'react';
import CalculatorScreen from './CalculatorScreen';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.updateArithmetic = this.updateArithmetic.bind(this);
    this.state = {
      arithmetic: '',
    };
  }

  updateArithmetic(event) {
    this.setState({
      arithmetic: event.target.value,
    });
  }

  render() {
    return (
      <div className="text-center">
        <div>
          <CalculatorScreen
            updateArithmetic={this.updateArithmetic}
            arithmetic={this.state.arithmetic}
          />
        </div>
        <div>
          Row1: % sqrt x^2 1/x<br />
          Row2: CE C blank /<br />
          Row3: 7 8 9 *<br />
          Row4: 4 5 6 -<br />
          Row5: 1 2 3 +<br />
          Row6: +/- 0 . =<br />
        </div>
      </div>
    );
  }
}

export default Calculator;
