import React from 'react'
import { useState } from 'react'
import BarCharts from './components/BarCharts/BarCharts'

import { UserData } from './components/Data/Data'

const App = () => {
  const [useData,setUserData] = useState({
    labels: UserData.map((data)=>data.year),
    datasets: [{
      label: 'User Gained',
      data: UserData.map((data)=>data.usergain),
      backgroundColor: 'MediumBlue'
    },
    {
      label: 'User Loss',
      data: UserData.map((data)=>data.userloss),
      backgroundColor: 'Lime'
    },
    
  ]
  })
  return (
    <div>
      <h1>BarCHarts</h1>
      <BarCharts chartData={useData}/>
    </div>
  )
}

export default App


















// import React from 'react'
// import { useState } from 'react'
// import BarCharts from './components/BarCharts/BarCharts'

// const App = () => {
//   const [useData,setUserData] = useState({
//     labels: [2020,2021,2022,2023],
//     datasets: [{
//       label: 'User Gained',
//       data: [5000,3000,4000,1000],
//       backgroundColor: 'lightblue'
//     },
//     {
//       label: 'User Loss',
//       data: [3000,4000,1000,5000]
//     },
    
//   ]
//   })
//   return (
//     <div>
//       <h1>BarCHarts</h1>
//       <BarCharts chartData={useData}/>
//     </div>
//   )
// }

// export default App