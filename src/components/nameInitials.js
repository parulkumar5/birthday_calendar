import React from "react";
import "./nameInitials.css";

let colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

function randomColor() {
  let pickedColor = Math.floor(Math.random() * colorArray.length);
  return colorArray[pickedColor];
}

export default function nameInitials({ name, cellLength }) {
  let initials = "";
  let parts = name.split(" ");
  for (let i = 0; i < parts.length; i++) {
    initials += parts[i].substring(0, 1);
  }

  let styles = {
    backgroundColor: randomColor(),
    width: cellLength,
    height: cellLength,
  };

  return (
    <div style={styles} className="name-initials-box">
      <span className="initials">{initials}</span>
    </div>
  );
}
