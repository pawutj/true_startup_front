import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import ScatterComponent from "./ScatterComponent";
import { useState } from "react";
const color2 = "#2B3340";
const data = {
  datasets: [
    {
      data: [
        {
          x: 1,
          y: 1,
        },
        {
          x: 0.8,
          y: 0.8,
        },
        {
          x: 0.4,
          y: 0.4,
        },
        {
          x: 0.2,
          y: 0.2,
        },
      ],
      backgroundColor: ["red", "red", "green", "green"],
    },
  ],
};

function App() {
  const [dataState, setDataState] = useState(data);
  return (
    <div className="App">
      <h1>test</h1>
      <div style={{ backgroundColor: "#2B3340", width: 400, height: 650 }}>
        {" "}
        <ScatterComponent data={dataState} />
      </div>
    </div>
  );
}

export default App;
