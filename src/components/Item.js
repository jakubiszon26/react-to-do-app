import React from "react";
import '../index.css'

export default function Item(props) {
  return (
    <div className="item">
      <h4 className="item-text">{props.children}</h4>
      
    </div>
  );
}
