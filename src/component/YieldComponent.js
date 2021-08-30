import React from "react";
import { Bar, Scatter } from "react-chartjs-2";
import { Utils } from "chart.js";
import dataJson from "../data.json";

const getArrayFromObj = (obj) => Object.keys(obj).map((key) => obj[key]);

const createDataChart = (data) => {
  return {
    labels: getArrayFromObj(dataJson.time),
    datasets: [
      {
        label: "Now",
        data: getArrayFromObj(dataJson.Yield),
        backgroundColor: "#E786D7",
      },
      {
        label: "History",
        data: getArrayFromObj(dataJson.ExpectedYield),
        backgroundColor: "#7F7FD5",
      },
    ],
  };
};

function YieldComponent({}) {
  const data = createDataChart(dataJson);
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
                  labelString: "Yield",
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

export default YieldComponent;
