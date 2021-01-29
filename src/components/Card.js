import React from "react";

export default function Card({ data }) {
  return (
    <div className="card">
      <h2 className="card-title">{data.title}</h2>
      <ul className="card-ul">
        {data.tasks.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
      <div className="card-button">
        <button className="add-task-button">Add task</button>
      </div>
    </div>
  );
}
