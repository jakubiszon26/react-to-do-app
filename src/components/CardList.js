import React from "react";
import Card from "./Card";
import data from "../data"
export default function CardList() {
  return (
    <div className="cardsList">
      {data.cards.map(item => <Card data={item} />)}
    </div>
  );
}
