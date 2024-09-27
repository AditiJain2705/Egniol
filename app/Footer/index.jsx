import React from 'react';
import { Box, Typography, Grid, Link, TextField, Button } from '@mui/material';
import { LinkedIn, Facebook, Instagram, YouTube, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{height:{xs:'100vh',md:'60vh'}, backgroundColor: '#000', color: '#fff', p: 10 }}>
      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 ,width:260}}>
          <img src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd22b9ae.png&w=48&q=75" alt="" srcset="" />
            <Typography variant="body1">
              We are 360° business solution providers dedicated to helping you grow at every stage of your journey.
            </Typography>
          </Box>
         
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Links Section */}
            <Grid item xs={6}>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                About us
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                Services
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                Partners
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                Success Stories
              </Link>
              <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                Contact Us
              </Link>
            </Grid>
          </Grid>   
        </Grid>
      </Grid>
      <Box  display={'flex'} justifyContent={'flex-end'}>
            <TextField
              variant="outlined"
              placeholder="Enter your email to get latest updates"
              InputProps={{ sx: { border:"1px solid white", color: 'white', borderRadius: 1 } }}
              size="small"
              style={{width:'300px'}}
            />
            <Button variant="contained" color="primary" sx={{ display: 'block' }}>
              Subscribe
            </Button>
      </Box>
<Box width={'100%'} paddingTop={'1vmax'}>
<Typography variant="body2" >
            Disclaimer: We are a Start-up consultant in India and professionals in Start-up consultation and understand
            the requirements of today's enterprises. We are merely a consultancy service-providing company and not in any
            affiliation/collaboration with any Government/Non-Government Agency/Institutions/Organization/Department.
          </Typography>
          <Typography variant="body2" sx={{ display: 'block', mt: 2 }}>
            Note: Payments for services are only accepted in the name of Egniol Services Private Limited, Egniol Consultancy
            Services, Egniol Financial Services Private Limited, Egniol Digital Services Private Limited, and the type of account is
            solely "Current Account" via NEFT/IMPS/RTGS and digital payment wallets (Cash Free, Razor pay, Aggrepay) and we do not
            accept payments on personal accounts or under any other name.
          </Typography>
</Box>
      {/* Bottom Section */}
      <Box sx={{flexDirection:{xs:'column',md:'row'}}} mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="grey" style={{fontWeight:'bold'}}>
          EGNIOL © 2024, All rights reserved. &nbsp; | &nbsp;
          <Link style={{color:'white'}} href="#" color="inherit" underline="none">Privacy notice</Link> &nbsp; | &nbsp;
          <Link style={{color:'white'}} href="#" color="inherit" underline="none">Legal</Link> &nbsp; | &nbsp;
          <Link style={{color:'white'}} href="#" color="inherit" underline="none">Cookie settings</Link>
        </Typography>
     {/* Contact Section */}
     <Box sx={{width:{xs:'100%',md:'15%'}}}mt={2} display="flex" justifyContent="space-between" alignItems="center" >
          <Box display={'flex'} justifyContent={'space-between'}>
          <img src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmail.cee9d063.png&w=32&q=75" alt="" srcset="" />

          <Typography variant="body2">
          info@egniol.co.in
          </Typography>
          </Box>
          <Box display={'flex'}  justifyContent={'space-between'}>
          <img src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcall.4ddf14d5.png&w=16&q=75" alt="" srcset="" />

        <Typography variant="body2">

          1800 571 7000
        </Typography>
        </Box>
      </Box>
        {/* Social Icons */}
        <Box>
          <Link href="#" color="inherit" sx={{ ml: 1 }}>
            <LinkedIn />
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 1 }}>
            <Facebook />
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 1 }}>
            <Instagram />
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 1 }}>
            <YouTube />
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 1 }}>
            <WhatsApp />
          </Link>
        </Box>
    
      </Box>

     
    </Box>
  );
};

export default Footer;
