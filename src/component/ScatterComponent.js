import React from "react";
import { Bar, Scatter } from "react-chartjs-2";
import scatterData from "../scatterData.json";
import scatterData2 from "../scatterData3.json";
const getArrayFromObj = (obj) => Object.keys(obj).map((key) => obj[key]);
const data = {
  datasets: [
    {
      data: [
        {
          x: 1,
          y: 1,
        },
        {
          x: 0.8,
          y: 0.8,
        },
        {
          x: 0.4,
          y: 0.4,
        },
        {
          x: 0.2,
          y: 0.2,
        },
      ],

      backgroundColor: "red",
    },
  ],
};

const zip = (x, y) => {
  let t = [];
  for (let i = 0; i < x.length; i++) {
    t = [...t, { x: x[i], y: y[i] }];
  }
  return t;
};

const createDataChart = (data) => {
  const _x = getArrayFromObj(scatterData.cumulative_cycletime);
  const _y = getArrayFromObj(scatterData.cumulative_stdtime);
  const zipData = zip(_x, _y);
  return {
    datasets: [{ label: "Cycle Time", data: zipData, backgroundColor: "red" }],
  };
};

const createDataChart2 = (data) => {
  //const _x = data.TimeStamp;
  const _x = getArrayFromObj(data.value);
  const _y = getArrayFromObj(data.cycletime_check);

  const zipData = zip(_x, _y);
  return {
    datasets: [{ label: "Cycle Time", data: zipData, backgroundColor: "red" }],
  };
};

function ScatterComponent({}) {
  const data = createDataChart(scatterData);
  const data2 = createDataChart2(scatterData2);
  console.log(data2);
  console.log(scatterData2);
  return (
    <div>
      <Scatter
        data={data2}
        options={{
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Time",
                  fontColor: "#FFF",
                },
                gridLines: {
                  color: "transparent",
                  zeroLineWidth: 1,
                  zeroLineColor: "#CACACA",
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
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
                },
              },
            ],
          },
          maintainAspectRatio: true,
          responsive: true,
        }}
        width={460}
        height={650}
      />
    </div>
  );
}

export default ScatterComponent;
