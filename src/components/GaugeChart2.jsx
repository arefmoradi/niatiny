import { useTheme } from '@mui/material';
import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { tokens } from '../theme';

const GaugeChart2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)


return (
<>
<GaugeChart id="gauge-chart5"
  nrOfLevels={420}
  arcsLength={[0.3, 0.5, 0.2]}
  colors={['#EA4228', '#F5CD19', '#5BE12C']}
  percent={0.37}
  arcPadding={0.02}
  textColor= {colors.greenAccent[100]}
  style={{
    width : '90px',

  }}
/>

</>

  )
  
}

export default GaugeChart2