import React from 'react'
import { Chart as ChartJS,
RadialLinearScale,
ArcElement,
Tooltip,
Legend
} from 'chart.js'

import { PolarArea } from 'react-chartjs-2'
import { Box } from '@mui/material'
ChartJS.register (
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
)


const labels = [ 'ابادان', 'اهواز' , 'تهران', ]
export const option = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: ' تعداد فروش دستگاه'
    },
  }
}

export const data = {
  labels,
  datasets: [{
    label: "Cash Less",
    data: [8,10,12],
    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
           'rgba(54, 162, 235, 0.5)',
           'rgba(255, 206, 86, 0.5)',

         ],
    borderWidth : "none",
    
   
  },
  

  ]
}

const PolarChart = () => {
  return (
    <Box>
      <PolarArea  data={data}  />
    </Box>
  )
}

export default PolarChart