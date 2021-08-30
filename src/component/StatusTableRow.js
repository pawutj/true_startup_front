import "../App.css";
import { useState } from "react";

function StatusTableRow({ icon, found, status, time, date }) {
  return (
    <tr>
      <th scope="row">
        <img src={icon} />
      </th>
      <td className="padding15">{found}</td>
      <td className="padding15">{status}</td>
      <td className="padding15">{time}</td>
      <td className="padding15" style={{ textAlign: "right" }}>
        {date}
      </td>
    </tr>
  );
}

export default StatusTableRow;
