import React from "react";
import NameInitials from "./nameInitials";
import { FaFrownOpen } from 'react-icons/fa';
import "./day.css";

export default function Day({ people, day }) {
  let sideOfSquare = 1;
  if (people.length === 0) {
    return (
      <div className="day-container">
        <div className="day-header">
          <span>{day}</span>
        </div>
        <div className="empty-day">
          <FaFrownOpen />
        </div>
      </div>
    );
  }

  sideOfSquare = Math.ceil(Math.sqrt(people.length));
  let cellLength = 300 / sideOfSquare;
  people.sort((a, b) => b.birthday - a.birthday);
  console.log("After sorted (reverse)", people);
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

Day.defaultProps = {
  people: []
}
