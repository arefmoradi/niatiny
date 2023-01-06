import { useTheme } from '@mui/material';
import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { tokens } from '../theme';

const GaugeChart3 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  
  return (
    <GaugeChart id="gauge-chart6" 

  nrOfLevels={15} 
  percent={0.56} 
  needleColor="#345243" 
  textColor= {colors.greenAccent[100]}
  style={{
    width : '90px',

  }}
/>

  )
}

export default GaugeChart3