import React from 'react'
import CardSlider from './CardSlider'
import { Box, Typography } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import TestinomialCardSlider from './TestinomialCardSlider';
const Testimonial = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <TestinomialCardSlider/>
        <Typography style={{fontWeight:'bold',color:'#03518F'}}>Explore all Testimonial <ArrowForwardOutlinedIcon/></Typography>
    </Box>
  )
}

export default Testimonial