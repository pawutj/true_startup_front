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
import VideoComponent from "./component/VideoComponent";
// const tablecon1 = "/asset/tableIcon1.svg";
function App() {
  const [video, setVideo] = useState("");
  return (
    <div
      className="App"
      style={{ backgroundColor: colors.background, minHeight: "100vh" }}
    >
      <div className="container">
        <div style={{ color: "white" }} className="p-3">
          <span className="p-2">LAST MONTH</span>
          <span className="p-2">LAST WEEK</span>
          <span className="p-2">YESTERDAY</span>
          <span className="p-2" style={{ color: "#00CEC9" }}>
            TODAY
          </span>
        </div>
        <div className="row">
          <div className="col-lg-8">
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
                  <p className="text-start text-white mb-0 mt-2">ON TIME</p>
                  <StatusCardComponent
                    h1txt="3.91 HOUR"
                    percent="4.02%"
                    color="g"
                    Logo="./asset/iconimg1.svg"
                  />
                </div>
                <div className="col m-2">
                  <p className="text-start text-white mb-0 mt-2">BREAK</p>
                  <StatusCardComponent
                    h1txt="1.56 HOUR"
                    percent="+3.96%"
                    color="g"
                    Logo="./asset/iconimg2.svg"
                  />
                </div>
                <div className="col m-2">
                  <p className="text-start text-white mb-0 mt-2">TIME</p>

                  <StatusCardComponent
                    h1txt="3.91 HOUR"
                    percent="+2.84%"
                    Logo="./asset/iconimg3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 mb-5">
              <p className="text-start text-white mb-0 mt-3">Loss Event</p>
              <StatusTable>
                <TableRow
                  found="พบการเดินออกนอกจุดทำงาน"
                  time="13.27 PM"
                  date="July 21,2021"
                  icon="./asset/walking.png"
                  setVideo={setVideo}
                  video="./asset/out.mp4"
                ></TableRow>
                <TableRow
                  found="พบการแอบคุยโทรศัพท์"
                  time="13.00 PM"
                  date="July 21,2021"
                  icon="./asset/tableIcon2.svg"
                  setVideo={setVideo}
                  video="./asset/phone.mp4"
                ></TableRow>
              </StatusTable>
            </div>
          </div>
          <div class="col-lg-4 mt-3">
            <p className="text-start text-white mb-0">{`Cycle Time`}</p>
            <div style={{ backgroundColor: "#2B3340", borderRadius: "10px" }}>
              <ScatterComponent />
            </div>

            <div className="mt-5">
              <VideoComponent src={video} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
