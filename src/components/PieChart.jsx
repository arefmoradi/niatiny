import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: [ 'تهران', 'اهواز', 'ابادان'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, ],
      backgroundColor: [

        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [

        'rgba(255, 206, 86, 1)',

        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const option = {
  responsive : true,
  title : {
    display: true,
    title: 'وضعیت کیفی استان ها'
  }
}

const PieChart = () => (
  <Box width='16rem'>
      <Pie options={option} data={data} />
  </Box>

)

export default PieChart