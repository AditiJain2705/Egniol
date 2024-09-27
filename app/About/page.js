import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from "../components/style.module.css";
const About = () => {
  return (
        <Box height={'40vh'}  padding={'0vmax 15vmax'} display={'flex'} justifyContent={'space-around'}style={{background:'linear-gradient(#17203C, #13161E)'}}
>
  <Box width={'30%'} textAlign={'center'} alignContent={'center'
  }>
    <Typography variant='h3' style={{color:'white', fontWeight:'bold'}}>
    WE ARE <span color='#6085E3'>EGNIOL</span>
    </Typography>
    <Typography variant='body1' color='white'>Your dedicated partners in business growth.<br/>

Experts in Taxes, Funding, and Marketing success</Typography>
    </Box>  
  <Box width={'20%'} paddingRight={'2vmax'} alignItems={'center'} display={'flex'} justifyContent={'center'}><img src="https://www.egniol.co.in/_next/static/media/hederLogo.773d32c0.svg" alt="" srcset="" />
  </Box>  



    </Box>
 )
}

export default About