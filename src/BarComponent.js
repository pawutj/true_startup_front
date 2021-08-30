import React from "react";
import { Bar, Scatter } from "react-chartjs-2";
import { Utils } from "chart.js";

const data = {
  labels: ["01", "02", "03", "04", "05"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5],
      backgroundColor: "#E786D7",
    },
    {
      label: "Dataset 2",
      data: [1, 2, 1, 4, 2],
      backgroundColor: "#7F7FD5",
    },
  ],
};
function BarComponent({}) {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default BarComponent;
