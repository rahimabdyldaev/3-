import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const subtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const multiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const divide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const power = () => {
    setResult(Math.pow(parseFloat(num1), parseFloat(num2)));
  };

  const sqrt = () => {
    setResult(Math.sqrt(parseFloat(num1)));
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Первое число"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Второе число"
      />
      <br />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <button onClick={power}>^</button>
      <button onClick={sqrt}>√</button>
      <br />
      <h3>Результат: {result}</h3>
    </div>
  );
}

export default Calculator;