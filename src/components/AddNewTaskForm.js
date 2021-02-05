import React, { useState } from "react";
import "../index.css";
export default function AddNewTaskForm({ data, setCardState, cardState }) {
  const [text, setText] = useState("");
  return (
    <div className="add-new-task-form">
      <input
        onChange={(event) => handleChange(event, setText)}
        className="add-input"
      />
      <button
        onClick={() => handleSubmit(data, text, setCardState, cardState)}
        className="submit-button"
      >
        Accept
      </button>
    </div>
  );
}
const handleChange = (event, setText) => {
  //set text hook to input value
  setText(event.target.value);
};
const handleSubmit = (data, text, setCardState, cardState) => {
  data.tasks.push({
    id: data.tasks.length + 1,
    title: text,
  });
  setCardState({
    //set clicked to false after finished task addition in purpose to hide add new task form component
    clicked: !cardState.clicked,
  });
  fetch(`http://localhost:8000/add?text="${text}"&cardId=${data.id}`)
};
