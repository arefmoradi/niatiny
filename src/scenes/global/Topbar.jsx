import React, {useContext} from "react";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

import { DarkModeOutlined , LightModeOutlined } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import Leftslider from "../../components/Leftslider";
import Sidebar from "../../components/Sidebar"

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>

    <Box sx={{ display : {xs: 'inline-block', sm: 'none'} }}>
    <Sidebar />
    </Box>



      {/* SEARCH BAR */}
      <Box
        width={.3}
      sx={{display : {xs : 'flex' ,sm: 'none'}}}
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="8px"
      >

        <InputBase size="small"  sx={{ mr: 2, flex: 1 }} placeholder="جستجو" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>

        
      </Box>
      <Box
        sx={{display : {xs : 'none' ,sm: 'flex'}}}
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="8px"
      >
        <InputBase sx={{ mr: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>



      {/* ICONS */}
      <Box display="flex">

      <Tooltip title="تم صفحه" arrow >
        <IconButton onClick={colorMode.toggleColorMode}> 
          {theme.palette.mode ==='dark' ? (
            <DarkModeOutlined />
            ) :
            (  <LightModeOutlined />  )
            }
         </IconButton>
      </Tooltip>


      <Leftslider />

      </Box>
    </Box>
  );
};

export default Topbar;