import React from "react";
import NameInitials from "./nameInitials";
import "./day.css";

export default function day({ people, day }) {
  let sideOfSquare = 1;
  if (people.length == 0) {
    return (
      <div className="day-container">
        <div className="day-header">
          <span>{day}</span>
        </div>
        <p>Nothing to show</p>
      </div>
    );
  }

  sideOfSquare = Math.ceil(Math.sqrt(people.length));
  let cellLength = 330 / sideOfSquare;
  people.sort((a, b) => a.birthday - b.birthday);
  return (
    <div className="day-container">
      <div className="day-header">
        <span>{day}</span>
      </div>
      <div className="initials-box-container">
        {people.map((elem, index) => {
          return (
            <NameInitials
              name={elem.name}
              key={index}
              cellLength={cellLength}
            />
          );
        })}
      </div>
    </div>
  );
}
