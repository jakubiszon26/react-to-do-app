import React from "react";
import addImg from "../add.png";
import data from "../data";
const AddNewCardButton = () => {
  return (
    <div onClick={() => addCard} className="addCard-container">
      <img alt="Add New Card" src={addImg} />
    </div>
  );
};
const addCard = () => {
  data.cards.push({ title: "To do", id: data.cards.length + 1, tasks: [] });
};
export default AddNewCardButton;
