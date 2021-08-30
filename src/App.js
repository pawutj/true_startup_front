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
import StatusCardComponent from "./component/StatusCardComponent";
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
            <div>
              <div className="row">
                <div className="col m-2">
                  <p className="text-start text-white mb-0 mt-2">TOTAL</p>
                  <StatusCardComponent
                    h1txt="8 HOUR"
                    percent="4.02%"
                    color="g"
                    Logo="./asset/iconimg1.svg"
                  />
                </div>
                <div className="col m-2">
                  <p className="text-start text-white mb-0 mt-2">ON TIME</p>
                  <StatusCardComponent
                    h1txt="6 HOUR"
                    percent="+3.96%"
                    color="g"
                    Logo="./asset/iconimg2.svg"
                  />
                </div>
                <div className="col m-2">
                  <p className="text-start text-white mb-0 mt-2">DELEY</p>

                  <StatusCardComponent
                    h1txt="2 HOUR"
                    percent="+2.84%"
                    Logo="./asset/iconimg3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 mb-5">
              <StatusTable>
                <TableRow
                  found="พบการไม่ใส่หน้ากากอนามัยขณะทำงาน"
                  status="CHECK"
                  time="13.27 PM"
                  date="July 21,2021"
                  icon="./asset/tableIcon1.svg"
                ></TableRow>
                <TableRow
                  found="พบการแอบคุยโทรศัพท์"
                  status="CHECK"
                  time="13.00 PM"
                  date="July 21,2021"
                  icon="./asset/tableIcon2.svg"
                ></TableRow>

                <TableRow
                  found="พบการแอบกินอาหาร"
                  status="UNCHECK"
                  time="11.30 AM"
                  date="July 21,2021"
                  icon="./asset/tableIcon3.svg"
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
