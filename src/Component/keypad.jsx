import React from "react";
import "./keypad.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Keypad = props => (
  <div
    className={`keypad-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Keypad;
