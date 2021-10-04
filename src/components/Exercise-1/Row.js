import React from "react";

export const Row = ({ index, residuo }) => {
  let classNameColor = "";
  switch (residuo) {
    case residuo:
      classNameColor = "white";
      break;
    case 1:
      classNameColor = "red";

      break;

    case 2:
      classNameColor = "green";
      break;
    case 3:
      classNameColor = "blue";
      break;
    case 4:
      classNameColor = "black";
      break;

    default:
      break;
  }
  return <div className={`row-${classNameColor}`}>{index}</div>;
};
