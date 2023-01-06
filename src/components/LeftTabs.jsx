import React from 'react';
import { Box, Tab, Tabs, useTheme } from '@mui/material';
import { useState } from 'react';
import { tokens } from '../theme';
import SettingSlider from './SettingSlider';
import MessageSlider from './MessageSlider';
import ReportSlider from './ReportSlider';


function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Box backgroundColor={colors.blueAccent[700]} >
        <Tabs 
        sx={{
          '& .MuiTabs-indicator': { color: colors.primary[300] },
          '& .Mui-selected': { color: colors.primary[700] },
         }}
        value={tabIndex} onChange={handleTabChange}>
          <Tab sx={{
            fontWeight: 'bold',
            fontSize : '14px'
          }} label="تنظیمات" />
          <Tab sx={{
            fontWeight: 'bold',
            fontSize : '14px'
          }} label="پیام ها" />
          <Tab sx={{
            fontWeight: 'bold',
            fontSize : '14px'
          }} label="گزارشات" />
        </Tabs>
      </Box>
      <Box>
        {tabIndex === 0 && (
            <SettingSlider />
        )}
        {tabIndex === 1 && (
            <MessageSlider />
        )}
        {tabIndex === 2 && (
            <ReportSlider />
        )}
      </Box>
    </Box>
  );
}

export default App;