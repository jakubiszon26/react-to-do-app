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
  setText(event.target.value);
};
const handleSubmit = (data, text, setCardState, cardState) => {
  data.tasks.push({
    id: data.tasks.length + 1,
    title: text,
  });
  setCardState({
    clicked: !cardState.clicked,
  });
};
