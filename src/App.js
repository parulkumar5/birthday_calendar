import Input from "./components/input";
import Day from "./components/day";
import "./App.css";
import { useState, useEffect } from "react";

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

const demoText = `[
  {
    "name": "Tyrion Lannister",
    "birthday": "12/02/1978"
  }, {
    "name": "Cersei Lannister",
    "birthday": "11/30/1975"
  }, {
    "name": "Daenerys Targaryen",
    "birthday": "11/24/1991"
  }, {
    "name": "Arya Stark",
    "birthday": "11/25/1996"
  }, {
    "name": "Jon Snow",
    "birthday": "12/03/1989"
  }, {
    "name": "Sansa Stark",
    "birthday": "08/15/1992"
  }, {
    "name": "Jorah Mormont",
    "birthday": "12/16/1968"
  }, {
    "name": "Jaime Lannister",
    "birthday": "12/06/1975"
  }, {
    "name": "Sandor Clegane",
    "birthday": "11/07/1969"
  }, {
    "name": "Tywin Lannister",
    "birthday": "10/12/1951"
  }, {
    "name": "Theon Greyjoy",
    "birthday": "12/31/1989"
  }, {
    "name": "Samwell Tarly",
    "birthday": "12/07/1990"
  }, {
    "name": "Joffrey Baratheon",
    "birthday": "06/12/1992"
  }, {
    "name": "Catelyn Stark",
    "birthday": "12/03/1962"
  }, {
    "name": "Bran Stark",
    "birthday": "12/02/1995"
  }, {
    "name": "Petyr Baelish",
    "birthday": "11/20/1974"
  }, {
    "name": "Robb Stark",
    "birthday": "11/28/1986"
  }, {
    "name": "Brienne of Tarth",
    "birthday": "11/27/1985"
  }, {
    "name": "Margaery Tyrell",
    "birthday": "12/02/1989"
  }, {
    "name": "Stannis Baratheon",
    "birthday": "09/14/1971"
  }, {
    "name": "Davos Seaworth",
    "birthday": "02/13/1973"
  }, {
    "name": "Tormund Giantsbane",
    "birthday": "12/14/1974"
  }, {
    "name": "Jeor Mormont",
    "birthday": "11/01/1955"
  }, {
    "name": "Eddard Stark",
    "birthday": "12/02/1963"
  }, {
    "name": "Khal Drogo",
    "birthday": "12/05/1980"
  }, {
    "name": "Ramsay Bolton",
    "birthday": "12/05/1976"
  }, {
    "name": "Robert Baratheon",
    "birthday": "12/02/1965"
  }, {
    "name": "Daario Naharis",
    "birthday": "12/02/1985"
  }, {
    "name": "Viserys Targaryen",
    "birthday": "12/06/1984"
  }
]`;

function App() {
  const [birthdayData, setBirthdayData] = useState([]); // 2d Array
  const [enteredString, setEnteredString] = useState(demoText);
  const [year, setYear] = useState(2010)
  function handleInput(elem) {
    setEnteredString(elem.target.value);
  }

  useEffect(() => {
    try {
      JSON.parse(enteredString);
    } catch (e) {
      console.log('Invalid input');
      return;
    }
    changeBirthdayData();
  }, [enteredString, year])


  function changeBirthdayData() {
    // Convert entered data to Array
    let enteredDataArray = JSON.parse(enteredString);

    // intializing temp variable
    let tempBirthdayData = [[], [], [], [], [], [], []];

    // traverse array => create corresponding object for the person and add it to right day
    for (let i = 0; i < enteredDataArray.length; i++) {
      if (!enteredDataArray[i].birthday || !enteredDataArray[i].name || enteredDataArray[i].birthday.length != 10)
        continue;
      let tempDateObject = new Date(enteredDataArray[i].birthday);

      let dateObject = new Date(
        year,
        tempDateObject.getMonth(),
        tempDateObject.getDate()
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


  function onYearChange(elem) {
    setYear(elem.target.value);
    changeBirthdayData();
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
      <Input handleInput={handleInput} onYearChange={onYearChange} text={enteredString} />
    </>
  );
}

export default App;
