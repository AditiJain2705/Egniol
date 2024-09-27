import React from "react";
import styles from "./style.module.css";
import { Box, Button, Typography } from "@mui/material";
import CardSlider from "./CardSlider";

const Dashboard = () => {
  return <Box height={'100vh'}>
  <Box className={styles.dashboardStyle}>
<Box marginTop={'28%'} >
<Typography variant="h2" color="white" fontWeight={'bold'}>Hum Badhayenge<br/>
Aapka Business</Typography>
<Typography variant="h5" color="white" padding={'0.8vmax 0vmax'}>One stop solution for MSMEs and startups</Typography>
<Button  className="font-semibold text-sm leading-6 text-white bg-[#03518F] border border-[#03518F] rounded-full px-9 py-3 mt-2 transition-all duration-150 ease-in-out cursor-pointer normal-case
">Learn How</Button>
</Box>
<Box marginTop={'2vmax'}>
<video className="rounded-xl" height={1000} width={1200} controls autoPlay muted src="https://www.egniol.co.in/_next/static/videos/homevideo.mp4"/>
</Box>

  </Box>
  </Box>
};

export default Dashboard;
