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
        '=',
        'CE'
      ],
      previousValue: 0,
      currentValue: 0,
      currentOperator: ''
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentValue !== this.state.currentValue) {
      if (this.state.currentOperator == '+') {
        const data =
          parseInt(prevState.currentValue) + parseInt(this.state.currentValue);
        console.log(data);
        this.setState({
          previousValue: data
        });
      } else if (this.state.currentOperator == '-') {
        const data =
          parseInt(prevState.currentValue) - parseInt(this.state.currentValue);
        console.log(data);
        this.setState({
          previousValue: data
        });
      } else if (this.state.currentOperator == '*') {
        const data =
          parseInt(this.state.previousValue) *
          parseInt(this.state.currentValue);
        console.log(data);
        this.setState({
          previousValue: data
        });
      } else if (this.state.currentOperator == '/') {
        const data =
          parseInt(this.state.previousValue) /
          parseInt(this.state.currentValue);
        this.setState({
          previousValue: data
        });
      }
    }
  }

  _handleClick = key => {
    if (key == '+' || key == '-' || key == '*' || key == '/') {
      this.setState({ currentValue: document.getElementById('calc').value });
      this.setState({ currentOperator: key });
      document.getElementById('calc').value = '';
    } else if (key == '=') {
      this.setState({ currentValue: document.getElementById('calc').value });
      document.getElementById('calc').value =
        this.state.previousValue + this.state.currentValue;
    } else if (key == 'CE') {
      document.getElementById('calc').value = '';
    } else {
      document.getElementById('calc').value =
        document.getElementById('calc').value + key;
    }
  };
  render() {
    return (
      <div>
        <h3 className="m-3">Simple Calculator!</h3>
        <Buttons_list
          values={this.state.buttons}
          onTrigger={this._handleClick.bind(this)}
        />
      </div>
    );
  }
}

export function Buttons_list(props) {
  return (
    <div className="m-2 p-5  bg-dark">
      <input type="text" id="calc" className="form-control mb-3" />
      {props.values.map(b => (
        <ButtonData
          className="m-2 p-2"
          key={b}
          value={b}
          onTrigger={props.onTrigger}
        />
      ))}
    </div>
  );
}

export function ButtonData(props) {
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
