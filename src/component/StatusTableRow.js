import "../App.css";
import { useState } from "react";
function StatusTableRow({ icon, found, time, date }) {
  return (
    <tr>
      <th scope="row">
        <img src={icon} width={32} />
      </th>
      <td className="padding15">{found}</td>
      <td className="padding15">
        <img src={"./asset/video.svg"} width={32} />
      </td>
      <td className="padding15">{time}</td>
      <td className="padding15" style={{ textAlign: "right" }}>
        {date}
      </td>
    </tr>
  );
}

export default StatusTableRow;
