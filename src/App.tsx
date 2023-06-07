import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const operators = [
    "AC",
    "DEL",
    "÷",
    "",
    1,
    2,
    3,
    "*",
    4,
    5,
    6,
    "+",
    7,
    8,
    9,
    "-",
    ".",
    0,
    "=",
  ];

  const handleClick = (val: string | number) => {
    if (val === "=") {
    }
    setInput(() => `${input}` + `${val}`);
  };

  return (
    <div className="App">
      <div className="inputArea">{input}</div>
      <div className="container">
        {operators.map((o) => (
          <div className="area" key={o} onClick={() => handleClick(o)}>
            {o}
          </div>
        ))}
      </div>
    </div>
  );
}
