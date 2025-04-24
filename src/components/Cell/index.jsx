import React from "react";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";
import { Square } from "./style";

function Cell({ val, chooseCell, style }) {
  return (
    <Square className={style} onClick={chooseCell}>
      {val == "x" ? (
        <ImCross style={{ color: "red" }} />
      ) : val == "o" ? (
        <FaRegCircle style={{ color: "blue" }} />
      ) : null}
    </Square>
  );
}

export default Cell;
