import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import profileIMG from "../assets/user.png"
import { tokens } from '../theme'

const SettingSlider = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)


  return (
    <>
    <Box mt={1} padding={1}>
    <Button sx={{width: "100%"}} variant="contained" color="success">
      <Typography fontWeight="bold"> ویرایش حساب کاربری </Typography>
    </Button>
    </Box>

    <Box mt={1} flexDirection="row-reverse" bgcolor={colors.primary[900]} padding={1} display="flex" justifyContent="space-between" alignItems="center">

      <Box> 
        <img 
        src={profileIMG}
        width="50px"
        alt='profile IMG'
        style={{
          border: `1px solid ${colors.greenAccent[500]}`,
          borderRadius: "50%"
        }}
        /> 
      </Box>
      <Box>  
        <Typography variant='h5' fontWeight="bold"> عارف مرادی پاشا </Typography>
        <Typography color={colors.greenAccent[500]} fontWeight="bold"> توسن سیستم </Typography>
      </Box>

    </Box>
    </>
  )
}

export default SettingSlider