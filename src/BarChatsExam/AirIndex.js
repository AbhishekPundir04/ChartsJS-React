import React from "react";
import classes from './AirIndex.module.css'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartsJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartsJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AirIndex = () => {
  const data = {
    labels: ['1st Jan', '1st Feb', '1st March', '1st April'],
    datasets: [
      {
        label: '2018',
        data: [78, 87, 94, 96.7],
        backgroundColor: 'blue',
        borderColor: 'black',
      },
      {
        label: '2019',
        data: [80, 89, 97, 98.7],
        backgroundColor: 'red',
        borderColor: 'black',
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        min: 5,
        max: 100,
        ticks: {
          stepSize: 10, // Specify the step size of the y-axis labels
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)', // Customize the color of the grid lines
        },
      },
    },
  };

  return (
    <div>
      <h1>Delhi Air Index</h1>
      <div className={classes.bar}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AirIndex;
