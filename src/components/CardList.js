import React, { useState, useEffect } from "react";
import Card from "./Card";
import data from "../data";
import AddNewCardButton from "./AddNewCardButton";
export default function CardList() {
  return (
    <>
      <AddNewCardButton />
      <div className="cardsList">
      {/* Map on data.js directly for now */}
        {data.cards.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
