import React, { useState } from "react";
import AddNewTaskForm from "./AddNewTaskForm";
import Item from "./Item";

export default function Card({ data }) {
  const [state, setState] = useState({
    clicked: false,
  });
  return (
    <div className="card">
      <h2 className="card-title">{data.title}</h2>
      <ul className="card-ul">
        {data.tasks.map((item) => (
          <li key={item.id}>
            <Item isFinished={item.isFinished} title={item.title} data={data} item={item} id={item.id}>{item.title}</Item>
          </li>
        ))}
      </ul>
      <div className="card-button">
        {!state.clicked && (
          <button
            onClick={() => click(setState, state)}
            className="add-task-button"
          >
            Add task
          </button>
        )}
        {state.clicked && (
          <AddNewTaskForm
            data={data}
            setCardState={setState}
            cardState={state}
          />
        )}
      </div>
    </div>
  );
}
const click = (setState, state) => {
  setState({
    clicked: !state.clicked,
  });
};
