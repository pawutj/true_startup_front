import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import ScatterComponent from "./component/ScatterComponent";
import BarComponent from "./component/BarComponent";
import { useState } from "react";
import YieldComponent from "./component/YieldComponent";

import { colors } from "./colors";
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
    <div className="App" style={{ backgroundColor: colors.background }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <p className="text-start text-white mb-0">PRODUCTIVITY</p>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <BarComponent />
            </div>
            <p className="text-start text-white mb-0">YIELD</p>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <YieldComponent />
            </div>
          </div>
          <div class="col-lg-4">
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
