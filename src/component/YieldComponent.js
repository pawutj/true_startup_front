import React from "react";
import { Bar, Scatter } from "react-chartjs-2";
import { Utils } from "chart.js";

const data = {
  labels: ["01", "02", "03", "04", "05"],
  datasets: [
    {
      label: "Now",
      data: [1, 2, 3, 4, 5],
      backgroundColor: "#E786D7",
    },
    {
      label: "History",
      data: [1, 2, 1, 4, 2],
      backgroundColor: "#7F7FD5",
    },
  ],
};
function YieldComponent({}) {
  return (
    <div>
      <Bar
        data={data}
        options={{ maintainAspectRatio: true, responsive: true }}
        width={1000}
        height={250}
      />
    </div>
  );
}

export default YieldComponent;
