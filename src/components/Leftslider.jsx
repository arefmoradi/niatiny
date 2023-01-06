import React, {useState} from 'react'
import { Box , Drawer, IconButton, Tooltip, useTheme } from "@mui/material"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { tokens } from '../theme';
import LeftTabs from "./LeftTabs"


const Leftslider = () => {
  const [isDrowerOpen, SetIsDrowerOpen] = useState(false)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <Tooltip arrow title="اطلاعت بیشتر">
      <IconButton edge="start" onClick={() => {SetIsDrowerOpen(true)}}>
        <GridViewOutlinedIcon />
      </IconButton>
    </Tooltip>


    <Drawer anchor='left' sx={{ color : 'red' }} open={isDrowerOpen} onClose={() => SetIsDrowerOpen(false)} >
      <Box
      sx={{
         width : 270,
         height : "100%",
         backgroundColor: colors.primary[400]
         }}
      >
        <LeftTabs />
      </Box>

    </Drawer>
    </>
  )

}

export default Leftslider