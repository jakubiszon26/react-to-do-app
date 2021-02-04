import React, { useState, useEffect } from "react";
import "../index.css";

export default function Item(props) {
  const [finishedState, setFinishedState] = useState(false);
  const isFinished = props.isFinished;
  useEffect(() => {
    setFinishedState(isFinished);
  }, []);

  return (
    <button
      onClick={() => handleClick(setFinishedState, finishedState)}
      className="item"
    >
      <h4 className={finishedState ? "item-text-finished" : "item-text"}>
        {props.children}
      </h4>
    </button>
  );
}
const handleClick = (setFinishedState, finishedState) => {
  setFinishedState(!finishedState);
};
