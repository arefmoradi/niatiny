import React from 'react'
import { Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { Box } from '@mui/material'
ChartJS.register (
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

export const option = {
  responsive: true,
  
}

const labels = ['خرمشهر' , 'ابادان', 'اهواز' , 'تهران','کرمان','اسلامشهر','چهاردانگه' ]

export const data = {
  labels,
  datasets: [{
    label: "Cash Less",
    data: [12,16,11,14,10,16,10],
    backgroundColor : 'rgba(53, 162, 235, 0.5)',
    borderColor : 'rgba(53, 162, 235)'
  },
  {
    label: "Win Core",
    data: [14,11,14,13,16,10,14],
    backgroundColor : 'rgba(255 ,99 ,132 ,0.5)',
    borderColor : 'rgba(255 ,99 ,132)'
  },
  {
    label: "Normal",
    data: [10,13,14,11,11,16,13],
    backgroundColor : 'rgba(0, 141, 71, 0.5)',
    borderColor : 'rgba(0, 141, 71)'
  }

  ]
}

const LineChart = () => {
  return (
    <>
    <Box sx={{
      display: {xs: 'none', md: 'inline'}
      
    }}>
      <Line height={'100vh'} options={option}  data={data}  />
    </Box>
    <Box sx={{
      display : {md:'none'}
    }}>
         <Line options={option}  data={data}  />
    </Box>

    </>
  )
}

export default LineChart