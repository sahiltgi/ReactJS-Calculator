import React, { Component } from "react";
import "./App.css";
import { Keypad } from "./Component/keypad";
import { Input } from "./Component/input";
import { ClearButton } from "./Component/clear";
// import { DelButton } from "./Component/delete";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    // console.log("aaya...", typeof this.state.input);
    this.setState({ input: String(math.evaluate(this.state.input)) }); // convert it into string
  };

  handleDelete = () => {
    let input = this.state.input;
    this.setState({ input: input.slice(0, -1) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          {/* <div className="row delKey">
            <Keypad handleClick={this.handleDelete}>DEL</Keypad>
          </div> */}
          <div className="row">
            <Keypad handleClick={this.addToInput}>7</Keypad>
            <Keypad handleClick={this.addToInput}>8</Keypad>
            <Keypad handleClick={this.addToInput}>9</Keypad>
            <Keypad handleClick={this.addToInput}>/</Keypad>
          </div>
          <div className="row">
            <Keypad handleClick={this.addToInput}>4</Keypad>
            <Keypad handleClick={this.addToInput}>5</Keypad>
            <Keypad handleClick={this.addToInput}>6</Keypad>
            <Keypad handleClick={this.addToInput}>*</Keypad>
          </div>
          <div className="row">
            <Keypad handleClick={this.addToInput}>1</Keypad>
            <Keypad handleClick={this.addToInput}>2</Keypad>
            <Keypad handleClick={this.addToInput}>3</Keypad>
            <Keypad handleClick={this.addToInput}>+</Keypad>
          </div>
          <div className="row">
            <Keypad handleClick={this.addToInput}>.</Keypad>
            <Keypad handleClick={this.addToInput}>0</Keypad>
            <Keypad handleClick={this.handleEqual}>=</Keypad>
            <Keypad handleClick={this.addToInput}>-</Keypad>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              CLR
            </ClearButton>
            <Keypad handleClick={this.handleDelete}>DEL</Keypad>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
