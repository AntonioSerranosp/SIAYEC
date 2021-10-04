import React, { useState } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [counter, setCounter] = useState(0);

  let classNameColor = "";
  const incrementar = (numero = 1) => {
    setCounter(counter + numero);
  };

  const discrimentar = (numero = 1) => {
    setCounter(counter - numero);
  };
  const handleDivision = () => {
    setCounter(counter / 3);
  };

  const modResult = counter % 3;
  console.log(modResult, "MR");

  if (modResult >= 0 && modResult < 1) {
    classNameColor = "residuo-red";
  } else if (
    (modResult >= 1 && modResult < 2) ||
    (modResult >= -1 && modResult > -2)
  ) {
    classNameColor = "residuo-green";
  } else if (
    (modResult >= 2 && modResult < 3) ||
    (modResult >= -2 && modResult > -3)
  ) {
    classNameColor = "residuo-blue";
  }
  return (
    <>
      <h3>Counter:</h3>

      <br />
      {/* subtract -2*/}
      <button onClick={() => discrimentar()} className="buttons">
        SUBSTRACT
      </button>
      {/* Add +1 */}
      <button onClick={() => incrementar(1)} className="buttons">
        add
      </button>
      {/* Add divide valor / 3 */}
      <button onClick={handleDivision} className="buttons">
        divide
      </button>

      <button onClick={() => setCounter(0)} className="buttons">
        Reset
      </button>
      <br />
      <div className="result-container">
        <div className={classNameColor}>{counter} </div>
      </div>
    </>
  );
};
