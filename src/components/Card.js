import React from "react";

export default function Card({data}) {
  return (
    <div className="card">
      <h2 className="card-title">{data.title}</h2>
      <ul className="card-ul">
        {data.tasks.map(item => <li>
          <h4>{item}</h4>
        </li>)}
      </ul>
    </div>
  );
}
