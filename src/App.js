import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import ScatterComponent from "./component/ScatterComponent";
import BarComponent from "./component/BarComponent";
import { useState } from "react";
import CardComponent from "./component/CardComponent";
import StatusCardComponent from "./StatusCardComponent";
import iconimg1 from "./asset/iconimg1.svg";
import YieldComponent from "./component/YieldComponent";
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
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <h4 className="text-start">PRODUCTIVITY</h4>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <BarComponent />
            </div>
            <h4 className="text-start">YIELD</h4>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <YieldComponent />
            </div>
          </div>
          <div class="col-sm-4">
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <ScatterComponent data={dataState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
