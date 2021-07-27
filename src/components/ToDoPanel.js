import React from "react";
import ToDoContainer from "../components/ToDoContainer";

export default function ToDoPanel() {
  return (
    <div className="to-do-panel">
      <div className="watermark-container">
        <p className="item imp">Important</p>
        <p className="item nes">Nescessary</p>
      </div>
      <div className="ruler-container">
        <div className="item hor"></div>
        <div className="item ver"></div>
      </div>
      <ToDoContainer imp={true} nes={false} />
      <ToDoContainer imp={true} nes={true} />
      <ToDoContainer imp={false} nes={false} />
      <ToDoContainer imp={false} nes={true} />
    </div>
  );
}
