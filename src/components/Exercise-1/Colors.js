import React, { useState } from "react";
import { Row } from "./Row";
import "./Colors.css";

export const Colors = () => {
  const [initialValue, setInitialValue] = useState("");
  const [disable, setDisable] = useState(false);
  const rows = [];
  const numbersRow = 101;
  const handleChangeInput = ({ target }) => {
    if (isNaN(target.value)) {
      //maybe usar un span
      setDisable(true);
    } else {
      setInitialValue(target.value);
    }
  };
  for (
    let i = initialValue.length > 0 ? initialValue : 0;
    i < numbersRow;
    i++
  ) {
    const sum = i + 1;
    const modResult = i % 5;
    // console.log({ i, modResult, rowshow: sum }, "<-----");

    rows.push(<Row key={i} index={i} residuo={modResult} />);
  }

  const renderDivs = () => {
    const numbersRow = 100;
    for (let i = 0; i < numbersRow; i++) {
      const modResult = i % 5;
      const sum = i + 1;
      console.log(sum, "<-----");
      rows.push(
        <div style={{ width: "100%" }} key={i}>
          {sum}
        </div>
      );
    }
  };
  return (
    <>
      <input
        onChange={handleChangeInput}
        type="text"
        value={initialValue}
        name="initialValue"
        disabled={disable}
      />
      <hr />
      <div>{rows}</div>
    </>
  );
};
