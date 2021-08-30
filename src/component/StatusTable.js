import "../App.css";
import { useState } from "react";

function StatusTable(props) {
  return (
    <div className="cardBG" style={{ padding: "10px 20px" }}>
      <table
        class="table table-borderless "
        style={{ textAlign: "left", marginBottom: "0", color: "white" }}
      >
        <thead>
          <tr className="tableHeader">
            <th scope="col">List</th>
            <th scope="col"></th>
            <th scope="col">Status</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Time
            </th>
            <th scope="col" style={{ textAlign: "right" }}>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {props.children}
          {/* <tr >
      <th scope="row"><img src={tablecon1} /></th>
      <td className="padding15" >พบการไม่ใส่หน้ากากอนามัยขณะทำงาน</td>
      <td className="padding15" >Otto</td>
      <td className="padding15" >13.27 PM</td>
      <td className="padding15" style={{textAlign:"right"}}>July 21,2021</td>
    </tr>
    <tr >
      <th scope="row"><img src={tablecon1} /></th>
      <td className="padding15" >พบการไม่ใส่หน้ากากอนามัยขณะทำงาน</td>
      <td className="padding15" >Otto</td>
      <td className="padding15" >13.27 PM</td>
      <td className="padding15" style={{textAlign:"right"}}>July 21,2021</td>
    </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default StatusTable;
