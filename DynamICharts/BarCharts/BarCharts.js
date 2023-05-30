import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
Chart as ChartJS,
    BarElement,
    CategoryScale, 
    LinearScale
} from 'chart.js'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale
)
const BarCharts = ({chartData}) => {
  return (
    <div>
        
        <div style={{width:"50%", backgroundColor: 'aqua'}}>
            <Bar
            // options={options}
            data={chartData}
            ></Bar>
        </div>
    </div>
  )
}

export default BarCharts