import React from 'react'
import { Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import { Box } from '@mui/material'
ChartJS.register (
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

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

const labels = ['خرمشهر' , 'ابادان', 'اهواز' , 'تهران','کرمان','اسلامشهر','چهاردانگه' ]

export const data = {
  labels,
  datasets: [{
    label: "Cash Less",
    data: [56,83,12,72,23,73,98,12],
    backgroundColor : 'rgba(53, 162, 235, 0.5)'
  },
  {
    label: "Win Core",
    boxShadow: '0px 0px 105px 45px rgba(45,255,196,0.9)',
    data: [21,32,71,42,27,31,83,21],
    backgroundColor : 'rgba(255 ,99 ,132 ,0.5)'
  }

  ]
}

const BarChart = () => {
  return (
    <Box>
      <Bar options={option} data={data} redraw="true" />
    </Box>
  )
}

export default BarChart