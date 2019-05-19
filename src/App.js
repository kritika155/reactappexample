// import React from 'react';
// import ReactDOM from 'react-dom'

// // const InputForm =
// //   <form target="_blank" action="https://google.com/search">
// //     <div>Enter input and click Search</div>
// //     <input name="q" className="input" />
// //     <Button label="Search" />
// //   </form>;
// // // InputForm "still" uses the Button component, so we need that too.
// // // Either JSX or normal form would do
// // function Button (props) {
// //   // Returns a DOM element here. For example:
// //   return <button type="submit">{props.label}</button>;
// // }
// // export default InputForm;
// // Use it (same syntax)
// const RandomValue = () => 
//   <div>
//     { Math.floor(Math.random() * 100) }
//   </div>;
//   export default RandomValue;

import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  }

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  }

  handleMultiply = val => {
    if (val === "x") {
      this.setState({input: this.state.input + val.replace("x", "*")});
    }
}

  render() {
    return (
      <div className="app">
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.handleMultiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;