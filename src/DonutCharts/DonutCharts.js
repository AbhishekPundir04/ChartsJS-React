import React from "react";
import classes from './Donut.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend)
const DoughnutChart = () => {
  const data = {
    labels: ["Sci-Fi", "Anime", "Bollywood", "Hollywood"],
    datasets: [
      {
        label: 'Fav Movies',
        data: [45,35,15,5 ],
        backgroundColor: ['#00008B','#FF6347','MediumVioletRed','#A9A9A9']
      }
    ], 
  };

  var options = {
    width: 400,
    height: 240,

    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  };
  
 
  return (
    <div>
      
      <div className={classes.movie}>
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </div>
  );
};

export default DoughnutChart;
