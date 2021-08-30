import "./App.css";
import { useState } from "react";
import tablecon1 from "./asset/tableIcon1.svg"

function StatusTableRow(props) {
  return (
    <tr >
      <th scope="row"><img src={props.icon} /></th>
      <td className="padding15" >{props.found}</td>
      <td className="padding15" >{props.status}</td>
      <td className="padding15" >{props.time}</td>
      <td className="padding15" style={{textAlign:"right"}}>{props.date}</td>
    </tr>

  );
}

export default StatusTableRow;
