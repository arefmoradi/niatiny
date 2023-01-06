import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { tokens } from "../theme";
import { useTheme } from '@mui/material';

const GaugeChart1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
<GaugeChart id="gauge-chart5"
nrOfLevels={20} 
percent={0.86} 
    textColor= {colors.greenAccent[100]}
  colors={['#EA4228', '#F5CD19','#5BE12C']}

  arcPadding={0.02}
  style={{
    width : "330px"
  }}
/>
  )
  
}

export default GaugeChart1