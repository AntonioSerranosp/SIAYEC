import React, { useState, useEffect } from "react";
import "./Calculator.css";

export const CalculatorFetch = () => {
  const [counter, setCounter] = useState(0);
  const [fetchResult, setFetchResult] = useState(0);

  //useEffect para peticion
  useEffect(() => {
    fetch(`http://localhost:3001/api/calculadora`)
      .then((response) => response.json())
      .then((data) => {
        const { operationResult } = data.lastResult[0];

        setFetchResult(operationResult);
      })
      .catch((err) => console.log(err));
  }, [counter]);
  let classNameColor = "";

  const incrementar = (numero = 1) => {
    const operationResult = fetchResult + numero;

    const data = {
      operationType: "sum",
      operationResult,
    };

    fetch(`http://localhost:3001/api/calculadora`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCounter(counter + numero);
      });
  };

  const discrimentar = () => {
    const operationResult = fetchResult - 2;

    const data = {
      operationType: "subtract",
      operationResult,
    };
    fetch(`http://localhost:3001/api/calculadora`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(setCounter(counter - 2));
  };
  const handleDivision = () => {
    const operationResult = fetchResult / 3;
    const data = {
      operationType: "division",
      operationResult,
    };
    fetch(`http://localhost:3001/api/calculadora`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(setCounter(counter / 3));
  };

  const handleReset = () => {
    const operationResult = 0;
    const data = {
      operationType: "division",
      operationResult,
    };
    fetch(`http://localhost:3001/api/calculadora`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(setCounter(0));
  };

  const modResult = fetchResult % 3;
  console.log(modResult, "modResult");
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
      <button onClick={discrimentar} className="buttons">
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

      <button onClick={handleReset} className="buttons">
        Reset
      </button>
      <br />
      <div className="result-container">
        <div className={`${classNameColor}`}>{fetchResult} </div>
      </div>
    </>
  );
};
