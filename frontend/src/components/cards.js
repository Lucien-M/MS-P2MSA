import React from "react";
import myNotes1 from "../background4.jpg";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20 p-4 mt-4 lg:gap-28 lg:flex-row">
        <h1 className="title">Welcome to Note Taking App</h1>
        <p className="subtitle">One Safe place for all your notes.</p>

        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <img className="rounded-t-lg" src={myNotes1} alt="note1" />
        </div>
      </div>
    </>
  );
};

export default Cards;
