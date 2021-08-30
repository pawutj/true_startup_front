import React from "react";
import { Bar, Scatter } from "react-chartjs-2";
import { Utils } from "chart.js";
import dataJson from "../data.json";
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

const getArrayFromObj = (obj) => Object.keys(obj).map((key) => obj[key]);

const createDataChart = (data) => {
  return {
    labels: getArrayFromObj(dataJson.time),
    datasets: [
      {
        label: "Now",
        data: getArrayFromObj(dataJson.Productivity),
        backgroundColor: "#E786D7",
      },
      {
        label: "History",
        data: getArrayFromObj(dataJson.ExpectedProductivity),
        backgroundColor: "#7F7FD5",
      },
    ],
  };
};
function BarComponent({}) {
  const data = createDataChart(dataJson);
  console.log(getArrayFromObj(dataJson.time));
  return (
    <div>
      <Bar
        data={data}
        options={{
          legend: {
            display: true,
            labels: {
              fontColor: "white",
            },
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: false,
                  labelString: "Cycle Time",
                  fontColor: "#FFF",
                },
                gridLines: {
                  color: "transparent",
                  zeroLineWidth: 1,
                  zeroLineColor: "#CACACA",
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Current Job",
                  fontColor: "#FFF",
                },
                gridLines: {
                  color: "transparent",
                  zeroLineWidth: 1,
                  zeroLineColor: "#CACACA",
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                },
              },
            ],
          },
          maintainAspectRatio: true,
          responsive: true,
        }}
        width={1000}
        height={250}
      />
    </div>
  );
}

export default BarComponent;
