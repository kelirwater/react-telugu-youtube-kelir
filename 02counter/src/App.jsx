import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  //let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      setCounter((prev) => prev + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    } // Decrease counter value
  };

  return (
    <>
      <h1>Chao aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      {counter >= 20 && <h2>Counter value is too high! Max is 20.</h2>}
      {counter <= 0 && <h2>Counter value is too low! Min is 0.</h2>}
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
