import React from "react";
import { Bar, Scatter } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "Scatter Dataset",
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
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default ScatterComponent;
