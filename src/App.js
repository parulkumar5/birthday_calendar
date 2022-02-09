import Input from "./components/input";
import Day from "./components/day";
import "./App.css";
import { useState } from "react";

// This is how data will be stored 0=sunday 6=saturday

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  const [birthdayData, setBirthdayData] = useState([]);
  const [enteredString, setEnteredString] = useState("");

  function handleInput(elem) {
    setEnteredString(elem.target.value);
  }

  function onYearChange(elem) {
    console.log("entered String is", enteredString);
    // Convert entered data to Array
    let enteredDataArray = JSON.parse(enteredString);

    // Temporary store selected year
    let year = elem.target.value;

    // intializing temp variable
    let tempBirthdayData = [[], [], [], [], [], [], []];

    // traverse array => create corresponding object for the person and add it to right day
    for (let i = 0; i < enteredDataArray.length; i++) {
      let tempDateObject = new Date(enteredDataArray[i].birthday);

      let dateObject = new Date(
        year,
        tempDateObject.getMonth(),
        tempDateObject.getDate(),
        1
      );

      // creating object and adding it
      tempBirthdayData[dateObject.getDay()].push({
        name: enteredDataArray[i].name,
        birthday: tempDateObject,
      });
    }

    // finally updating the state of component
    setBirthdayData(tempBirthdayData);
    console.log("birthday Data", birthdayData);
  }

  return (
    <>
      <header className="header">
        <span>Birthday Calendar</span>
      </header>
      <div className="calendar-container">
        {birthdayData.map((elem, index) => {
          return <Day people={elem} day={dayNames[index]} key={index} />;
        })}
      </div>
      <Input handleInput={handleInput} onYearChange={onYearChange} />
    </>
  );
}

export default App;
