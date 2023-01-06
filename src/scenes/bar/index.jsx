import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="امار بار" subtitle="چارت بار ساده" />
      <Box alignContent="center"  width="98%" >
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
