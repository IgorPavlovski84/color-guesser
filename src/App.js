import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [isCorrect, setisCorrect] = useState();
  const [winningNumber, setWinningNumber] = useState('0');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = () => {
    setColors([
      ("#" + Math.floor(Math.random() * 16777215).toString(16) + "00000").slice(0,7),
      ("#" + Math.floor(Math.random() * 16777215).toString(16) + "00000").slice(0,7),
      ("#" + Math.floor(Math.random() * 16777215).toString(16) + "00000").slice(0,7)
    ]);
    console.log(colors);
  };

  const checkSolution = (e) => {
    console.log(e.target.id);
    console.log(winningNumber);
    if (e.target.id.toString() === winningNumber.toString()) {
      setisCorrect(true);
    } else {
      setisCorrect(false);
    }
    generateColors();
    setWinningNumber(Math.floor(Math.random() * 3));
    setStarted(true);
  };

  const content = <div>{isCorrect ? "Correct" : "Wrong"}</div>

  return (
    <div className="App">
      <h1>Simple HEX Color Guesser Game </h1>
      <div className="flex-container">
        <button
          id="0"
          className="square"
          onClick={checkSolution}
          style={{ backgroundColor: colors[0] }}
        >{colors[0]}</button>
        <button
          id="1"
          className="square"
          onClick={checkSolution}
          style={{ backgroundColor: colors[1] }}
        >{colors[1]}</button>
        <button
          id="2"
          className="square"
          onClick={checkSolution}
          style={{ backgroundColor: colors[2] }}
        >{colors[2]}</button>
      </div>
      <div className="solution">Click on the area over with HEX color: {colors[winningNumber]}</div>
      <div> {started ? content : ""} </div>
    </div>
  );
}

export default App;
