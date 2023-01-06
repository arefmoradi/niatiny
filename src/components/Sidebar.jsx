import React, {useState} from 'react'
import { Box , Drawer, IconButton, Tooltip, useTheme } from "@mui/material"
import { tokens } from '../theme';
import { ContactsOutlined, GroupOutlined, HomeOutlined, InfoOutlined, ListOutlined, MenuOutlined, TabletOutlined } from '@mui/icons-material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';



const Slider = () => {
  const [isDrowerOpen, SetIsDrowerOpen] = useState(false)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <Tooltip arrow title="ساید بار">
      <IconButton  edge="start" onClick={() => {SetIsDrowerOpen(true)}} >
        <MenuOutlined />
      </IconButton>
    </Tooltip>


    <Drawer anchor='right' sx={{ color : 'red' }} open={isDrowerOpen} onClose={() => SetIsDrowerOpen(false)} >
      <Box
      sx={{
         width : 180,
         height : "100%",
         backgroundColor: colors.primary[400]
         }}
      >




<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'none' }}>
      <nav aria-label="main mailbox folders">
        <List>
            
         <Link to="/">
          <ListItem disablePadding>

            <ListItemButton>
                
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>

              <ListItemText primary="خانه" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/team">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupOutlined />
              </ListItemIcon>
              <ListItemText primary="مدیریت تیم" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/contacts">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactsOutlined />
              </ListItemIcon>
              <ListItemText primary="مخاطبین" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to="/invoices">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined />
              </ListItemIcon>
              <ListItemText primary="لیست فاکتورها" />
            </ListItemButton>
          </ListItem>
          </Link>

         <Link to="form">
         <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TabletOutlined />
              </ListItemIcon>
              <ListItemText primary="فرم حساب" />
            </ListItemButton>
          </ListItem>
         </Link>

         <Link to="/faq">
         <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoOutlined />
              </ListItemIcon>
              <ListItemText primary="سوالات متداول" />
            </ListItemButton>
          </ListItem>
         </Link>

        </List>
      </nav>
      <Divider />
      </Box>





      </Box>

    </Drawer>
    </>
  )

}

export default Slider