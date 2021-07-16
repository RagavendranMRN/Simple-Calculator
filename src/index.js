import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CalculatorApp extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '+',
        '-',
        '*',
        '/',
        '='
      ]
    };
  }

  _handleClick = key => {
    console.log(key);
    if (key == '+' || key == '-' || key == '*' || key == '/') {
      console.log('Operations');
    } else if (key == '=') {
      console.log('Equal');
    } else {
      document.getElementById('calc').value =
        document.getElementById('calc').value + key;
    }
  };
  render() {
    return (
      <div>
        <h1 className="m-3">Simple Calculator!</h1>
        <Buttons_list
          values={this.state.buttons}
          onTrigger={this._handleClick}
        />
      </div>
    );
  }
}

export function Buttons_list(props) {
  return (
    <div className="m-3 p-5">
      <input type="text" id="calc" className="form-control" />
      {props.values.map(b => (
        <ButtonData value={b} onTrigger={props.onTrigger} />
      ))}
    </div>
  );
}

export function ButtonData(props) {
  console.log(props.value);
  return (
    <button
      className="btn btn-primary m-2"
      onClick={() => {
        props.onTrigger(props.value);
      }}
    >
      {props.value}
    </button>
  );
}
ReactDOM.render(<CalculatorApp />, document.getElementById('root'));
