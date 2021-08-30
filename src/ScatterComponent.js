import React from "react";
import { Bar, Scatter } from "react-chartjs-2";

const dataMock = {
  datasets: [
    {
      data: [
        {
          x: -10,
          y: 0,
        },
        {
          x: 0,
          y: 10,
        },
        {
          x: 10,
          y: 5,
        },
        {
          x: 0.5,
          y: 5.5,
        },
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

function ScatterComponent({ data }) {
  return (
    <div>
      <Scatter
        data={data}
        options={{
          scales: {
            xAxes: [{ gridLines: { display: false } }],
            yAxes: [{ gridLines: { display: false } }],
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
