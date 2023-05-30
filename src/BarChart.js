import React from "react";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["MOnday", "Tuesday", "Wed"],
    datasets: [
      {
        label: "",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "",
        data: [3, 5, 6],
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};
  return (
    <div>
      <h1>Bar Chart</h1>
      <div className={classes.main}>
        <Bar  data={data} options={options}></Bar>
        <Bar  data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default BarChart;
