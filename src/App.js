import React from "react";
import classes from "./App.module.css";
import AirIndex from './BarChatsExam/AirIndex'
import DoughnutChart from "./DonutCharts/DonutCharts";


const App = () => {
  
  return <div className={classes.main}>
   <DoughnutChart/>
   <AirIndex/>
  </div>;
};

export default App;
