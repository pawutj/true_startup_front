import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import ScatterComponent from "./ScatterComponent";
import BarComponent from "./BarComponent";
import { useState } from "react";
import CardComponent from "./CardComponent";
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
      <div className="container">
        {/* <div>
          <h1>test</h1>
          <div style={{ backgroundColor: "#2B3340", width: 400, height: 650 }}>
            {" "}
            <ScatterComponent data={dataState} />
          </div>
          <CardComponent />
        </div> */}

        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              {" "}
              <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
                <BarComponent />
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
    </div>
  );
}

export default App;
