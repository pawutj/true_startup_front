import logo from "./logo.svg";
import "./App.css";
import TestChart from "./TestChart";
import ScatterComponent from "./component/ScatterComponent";
import BarComponent from "./component/BarComponent";
import { useState } from "react";
import YieldComponent from "./component/YieldComponent";
import StatusTable from "./component/StatusTable";
import TableRow from "./component/StatusTableRow";
import { colors } from "./colors";
// const tablecon1 = "/asset/tableIcon1.svg";
function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.background }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <p className="text-start text-white mb-0 mt-3">PRODUCTIVITY</p>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <BarComponent />
            </div>
            <p className="text-start text-white mb-0 mt-3">YIELD</p>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <YieldComponent />
            </div>
            <div className="mt-5">
              <StatusTable>
                <TableRow
                  icon={""}
                  found="พบการไม่ใส่หน้ากากอนามัยขณะทำงาน"
                  status="status"
                  time="13.27 PM"
                  date="July 21,2021"
                ></TableRow>
                <TableRow
                  found="พบการไม่ใส่หน้ากากอนามัยขณะทำงาน"
                  status="status"
                  time="13.27 PM"
                  date="July 21,2021"
                ></TableRow>

                <TableRow
                  found="พบการไม่ใส่หน้ากากอนามัยขณะทำงาน"
                  status="status"
                  time="13.27 PM"
                  date="July 21,2021"
                ></TableRow>
              </StatusTable>
            </div>
          </div>
          <div class="col-lg-4 mt-3">
            <p className="text-start text-white mb-0">{`STD Time & Current`}</p>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <ScatterComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
