import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";

import PieChart from "../../components/PieChart";
import Neshan from "../../components/Neshan";
import GaugeChart1 from "../../components/GaugeChart";
import GaugeChart2 from "../../components/GaugeChart2";

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
        {/* ROW 1 */}
        <Box
          borderRadius="7px"
          gridColumn= {{xs: "span 12",sm : 'span 6', md: "span 3"}}
          backgroundColor= {colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="ایمیل های ارسال شده"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12",sm : 'span 6', md: "span 3"}}
          backgroundColor={colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="فروش های اخیر"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12",sm : 'span 6', md: "span 3"}}
          backgroundColor={colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="کاربران جدید"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12",sm : 'span 6', md: "span 3"}}
          backgroundColor={colors.primary[0]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="ترافیک دریافت شده"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12",sm: 'span 6', md: "span 2"}}
          gridRow= {{xs:'span 3', md: " span 2"}}
          backgroundColor={colors.primary[0]}
          overflow="hidden"
          
        >
              <Typography
                mt="20px"
                p="0 30px"
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                استیبل بودن بانک
              </Typography>

          <Box mt={2}>
            <GaugeChart1  />
          </Box>
          <Box mt={2}>
          <GaugeChart2 />
          </Box>
        </Box>
        <Box
        borderRadius="7px"
           gridColumn={{xs: "span 12",sm: 'span 6', md: "span 3"}}
           gridRow="span 2"
           backgroundColor={colors.primary[0]}
           overflow="hidden"
        >

        <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"

          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                درآمد کسب شده
              </Typography>

            </Box>
            <Box>

            </Box>
          </Box>
          <Box>
            <LineChart  />
          </Box>
        </Box>
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12", sm: "span 6", md: "span 3"}}
          gridRow= {{xs: 'span 2', md: 'span 2'}}
          backgroundColor={colors.primary[0]}
        >

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}

          >
            <PieChart />
          </Box >
              
           </Box>
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12", sm: "span 6", md: "span 3"}}
          gridRow="span 2"
          backgroundColor={colors.primary[0]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.blueAccent[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              اخرین تراکنش ها
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.blueAccent[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.blueAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.blueAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
        borderRadius="7px"
          gridColumn={{xs: "span 12", sm: "span 6" , md: "span 3"}}
          gridRow="span 2"
          backgroundColor={colors.primary[0]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            پویش
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 درآمد کسب شده 
            </Typography>
            <Typography variant="h6"> با کسر مالیات </Typography>
          </Box>
        </Box>
        <Box
        borderRadius="7px !important"
          gridColumn={{xs: "span 12", sm: "span 6" , md: "span 4"}}
          gridRow="span 2"
          backgroundColor={colors.primary[0]}
        >
          
          <Box mt="3rem">
            <BarChart  />
          </Box>
        </Box>
        <Box
          sx={{
            overflow : "hidden !important", 
          }}
          gridColumn={{xs: "span 12", sm: "span 12", md: 'span 5'}}
          gridRow={{xs: "span 2", sm: "span 3" , md: "span 2"}}
          backgroundColor={colors.primary[0]}
        >
          <Box>
            <Neshan  />
          </Box>
        </Box>

        

      </Box>
    </Box>

    
  );
};

export default Dashboard;
