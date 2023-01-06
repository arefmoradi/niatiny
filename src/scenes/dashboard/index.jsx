import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

import LineChart from "../../components/LineChart";
import {mokTableData as data} from "../../data/mockData"
import PieChart from "../../components/PieChart";
import Neshan from "../../components/Neshan";
import GaugeChart1 from "../../components/GaugeChart";
import GaugeChart2 from "../../components/GaugeChart2";
import GaugeChart3 from "../../components/GaugeChart3";
import Gauge4 from "../../components/Gauge4";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { AccountBalanceOutlined, AccountBoxOutlined, InfoRounded, StorageOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Box m="20px">
    {/* HEADER */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="خانه" subtitle="صفحه اصلی" />

    </Box>

    {/* GRID & CHARTS */}
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="150px"
      gap="13px"
    >



        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12",sm: 'span 6', md: "span 6"}}
          gridRow= {{xs:'span 2', md: " span 2"}}
          backgroundColor={colors.primary[0]}
          overflow="hidden"
          
        >

                <Box display="flex" justifyContent="space-between">
                <Typography
                                mt="20px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                > شبکه بانکی در یک نگاه </Typography>
                <Typography
                                mt="20px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                > <InfoRounded /> </Typography>
                </Box>

          <Box display="flex" justifyContent="center" mt={-3}>
            <Box>
            <GaugeChart1  />
            <Typography textAlign="center" mt="-.8rem"  variant="h6" color={colors.greenAccent[100]}>
                وضعیت کلی
            </Typography>
            </Box>

          </Box>

          <Box display="flex" mt={2} sx={{display : {xs:'none' , md:'flex'}}} justifyContent="center" >

          <Box display="flex" flexDirection="column">
            <Gauge4 />
            <Typography textAlign="center" mt="-.6rem" varient="h6" color={colors.greenAccent[100]}>
            crs
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <GaugeChart3 />
            <Typography textAlign="center" mt="-.6rem" varient="h6" color={colors.greenAccent[100]}>
            atm
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <Gauge4 />
            <Typography textAlign="center" mt="-.6rem" varient="h6" color={colors.greenAccent[100]}>
            server
            </Typography>
            </Box>

            <Box display="flex" flexDirection="column">
            <GaugeChart2 />
            <Typography textAlign="center" mt="-.6rem" varient="h6" color={colors.greenAccent[100]}>
            pc
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <Gauge4 />
            <Typography textAlign="center" mt="-.6rem" varient="h6" color={colors.greenAccent[100]}>
            cashless
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <GaugeChart2 />
            <Typography textAlign="center" mt="-.6rem" varient="h6" color={colors.greenAccent[100]}>
            pos
            </Typography>
            </Box>
          


          </Box>




          <Box sx={{
            display : {md: 'none'}
          }}>
          <Box display="flex" justifyContent="center">

          <Box display="flex" flexDirection="column">
            <Gauge4 />
            <Typography textAlign="center" mt="-.8rem" varient="h6" color={colors.greenAccent[100]}>
            crs
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <GaugeChart3 />
            <Typography textAlign="center" mt="-.8rem" varient="h6" color={colors.greenAccent[100]}>
            atm
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <Gauge4 />
            <Typography textAlign="center" mt="-.8rem" varient="h6" color={colors.greenAccent[100]}>
            server
            </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" mt={2}>
          <Box display="flex" flexDirection="column">
            <GaugeChart2 />
            <Typography textAlign="center" mt="-.8rem" varient="h6" color={colors.greenAccent[100]}>
            pc
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <Gauge4 />
            <Typography textAlign="center" mt="-.8rem" varient="h6" color={colors.greenAccent[100]}>
            cashless
            </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
            <GaugeChart2 />
            <Typography textAlign="center" mt="-.8rem" varient="h6" color={colors.greenAccent[100]}>
            pos
            </Typography>
            </Box>
          </Box>

          </Box>



        </Box>

        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12", sm: "span 6", md: "span 6"}}
          gridRow="span 2"
          backgroundColor={colors.primary[0]}
          overflow="auto"
        >
            <Box display="flex" justifyContent="space-between">
                <Typography
                                mt="20px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                >  لیست گزارشات حیاتی </Typography>
                <Typography
                                mt="20px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                > <InfoRounded /> </Typography>
                </Box>
          
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
              mr="5px"
              ml="5px"
            >
              <Box display="flex" flexDirection="column" width="100%">

                {data.map((pos,i) => (
                  <Box display="flex" justifyContent="space-between" flex={2} p={2} borderBottom="1px solid blue">
                    
                     <Box display="flex" flexDirection="column">
                      <Typography fontWeight="bold">
                        {pos.title}
                      </Typography> 
                      <Typography fontSize="10px">
                       - {pos.description}
                      </Typography>
                     </Box>
                     <Box display="flex" justifyContent="space-between">
                     <Box ml="3.5rem">
                        {pos.color}
                     </Box>
                     <Box>
                      {pos.more}
                      </Box>
                   </Box> 
                  </Box>
                ))}
                
              
              </Box>
            </Box>

        </Box>

        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12", sm: "span 6", md: "span 5"}}
          gridRow= {{xs: 'span 2', md: 'span 2'}}
          backgroundColor={colors.primary[0]}
        >

<Box display="flex" justifyContent="space-between">
                <Typography
                                mt="15px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                >  لیست گزارشات حیاتی </Typography>
                <Typography
                                mt="15px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                > <InfoRounded /> </Typography>
                </Box>



          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            colors={colors.grey[100]}

          >
            <PieChart />
          </Box >
              
           </Box>

           <Box
        borderRadius="7px"
           gridColumn={{xs: "span 12",sm: 'span 6', md: "span 7"}}
           gridRow="span 2"
           backgroundColor={colors.primary[0]}
           overflow="scroll"
        >


 <Box display="flex" justifyContent="space-between">
                <Typography
                                mt="20px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                > شبکه بانکی در یک نگاه </Typography>
                <Typography
                                mt="20px"
                                p="0 30px"
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                > <InfoRounded /> </Typography>
                </Box>
          
          <Box>
            <LineChart  />
          </Box>
        </Box>


          <Box
          borderRadius="7px"
          gridColumn= {{xs: "span 6",sm : 'span 6', md: "span 4"}}
          backgroundColor= {colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32 در شبکه"
            subtitle=" سرور "
            progress="0.21"
            increase="+19%"
            icon={
              <StorageOutlined 
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>


          <Box
          borderRadius="7px"
          gridColumn= {{xs: "span 6",sm : 'span 6', md: "span 4"}}
          backgroundColor= {colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="   کل / درسرویس"
            progress="0.75"
            increase="+14%"
            icon={
              <AccountBalanceOutlined 
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>




        <Box
          sx={{
            overflow : "hidden", 
          }}
          gridColumn={{xs: "span 12", sm: "span 12", md: 'span 4'}}
          gridRow={{xs: "span 2", sm: "span 3" , md: "span 2"}}

        >
          <Box>
            <Neshan  />
          </Box>

          </Box>


          <Box
          borderRadius="7px"
          gridColumn= {{xs: "span 6",sm : 'span 6', md: "span 4"}}
          backgroundColor= {colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,406,020"
            subtitle=" کارکرد دستگاه"
            progress="0.56"
            increase="+64%"
            icon={
              <MonetizationOnIcon 
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
          <Box
          borderRadius="7px"
          gridColumn= {{xs: "span 6",sm : 'span 6', md: "span 4"}}
          backgroundColor= {colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="21"
            subtitle=" مشتریان جدید "
            progress="0.24"
            increase="+21%"
            icon={
              <AccountBoxOutlined 
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>




    </Box>


    </Box>

  )

}

export default Dashboard