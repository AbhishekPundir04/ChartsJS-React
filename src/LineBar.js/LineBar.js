import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineBar = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    datasets: [
      {
        label: 'Push Ups',
        data: [9,15,6,12],
        backgroundColor: 'aqua',
        borderColor: '  black',
        pointBorderCOlor: 'aqua',

      },
    ],
  };

  const options = {
    plugins:{
      legend: true,
    },
    scales:{
      y:{
        min:3,
        max:18
      }
    }

  };
  
  return (
    <div>
      <h1>Push Up Weekly Chart</h1>
      <div style={{width:'40%', backgroundColor:'aqua'}}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineBar;
