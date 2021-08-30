import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import Scatter from "./Scatter";

const data = {
  datasets: [
    {
      label: "Scatter Dataset",
      data: [
        {
          x: -10,
          y: 0,
        },
        {
          x: 0,
          y: 10,
        },
        {
          x: 10,
          y: 5,
        },
        {
          x: 0.5,
          y: 5.5,
        },
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <div style={{ width: 500 }}>
        {" "}
        <Scatter data={data} />
      </div>
    </div>
  );
}

export default App;
