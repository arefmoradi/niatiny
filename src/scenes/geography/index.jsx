import React from "react";
import { Box, useTheme } from "@mui/material";
import Neshan from "../../components/Neshan";

import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <Neshan />
      </Box>

  );
};

export default Geography;
