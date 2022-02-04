import React from "react";

function dateSelect(props) {
  let options = [];
  for (let i = props.start; i <= props.end; i++) {
    options.push(
      <option
        key={i}
        value={i}
        onClick={() => {
          props.getSelectedDate(i);
        }}
      >
        {i}
      </option>
    );
  }
  return options;
}

export default dateSelect;
