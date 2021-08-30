import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import ScatterComponent from "./ScatterComponent";
import { useState } from "react";
import CardComponent from "./CardComponent";
import StatusTable from "./StatusTable";
import iconimg1 from "./asset/iconimg1.svg"
import TableRow from "./StatusTableRow"
import tablecon1 from "./asset/tableIcon1.svg"
import StatusCardComponent from "./StatusCardComponent";
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
              {/* <StatusTable >
                <TableRow icon={tablecon1} found="พบการไม่ใส่หน้ากากอนามัยขณะทำงาน" status="status" time="13.27 PM" date="July 21,2021"> </TableRow>
                <TableRow icon={tablecon1} found="พบการไม่ใส่หน้ากากอนามัยขณะทำงาน" status="status" time="13.27 PM" date="July 21,2021"> </TableRow>
              </StatusTable> */}
              <StatusCardComponent Logo={tablecon1} h1txt="8 Hours" percent="4.07%" color="g"></StatusCardComponent>
              
                

            </div>
            <div class="col-sm-4">
              {" "}
              <div
                style={{ backgroundColor: "#2B3340", width: 400, height: 650 }}
              >
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
