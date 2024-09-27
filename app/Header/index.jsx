
"use client"
import React, { useState } from 'react';
import styles from "./style.module.css";
import { Box, List, ListItemText, Typography, IconButton, Drawer, ListItem } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div className={styles.header}>
      <header className="border border-white border-opacity-20 h-[90%] w-[90vw] rounded-full flex justify-between text-center items-center" style={{ backgroundColor: '#252E47' }}>
        <Box paddingLeft={'1.5vmax'}>
          <img src="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.0abcfaca.png&w=256&q=75" alt="Egniol" />
        </Box>

        <Box width={'40%'} sx={{ display: { xs: 'none', md: 'flex' }}}>
          <List style={{display:'flex',justifyContent:'space-between',color:'white'}}>
            <ListItemText className='p-2'><Link href={'/'}>Home</Link></ListItemText>
            <ListItemText className='p-2' ><Link href={'/About'}>About us</Link></ListItemText>
            <ListItemText  className='p-2'>Services</ListItemText>
            <ListItemText  className='p-2'>Success stories</ListItemText>
            <ListItemText  className='p-2'>Contact us</ListItemText>
            <ListItemText className='p-2' >More<KeyboardArrowDownOutlinedIcon/></ListItemText>

          </List>
        </Box>

        {/* Hamburger Menu Icon for smaller screens */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
        </Box>

        {/* Right side phone and AI section */}
        <Box   sx={{
    display: { xs: 'none', xl:'flex'}, 
    height: '80%',
    width: '22%',
    padding: '0.5vmax',
    justifyContent: 'space-between',
    alignItems: 'center',
  }} >
          <Box height={'60%'}>
            <img src="https://www.egniol.co.in/_next/static/media/AiHeader.0c041c2e.svg" alt="AI" />
          </Box>
          <Box className="h-12 w-56 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#03518F' }}>
            <Box height={'100%'} display={'flex'} justifyContent='center' alignItems={'center'} className={styles.blinking}>
              <LocalPhoneOutlinedIcon />
              <Typography variant="h5" color="white">1800 5717 000</Typography>
            </Box>
          </Box>
        </Box>

        {/* Drawer for mobile view */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button>
                <ListItemText><Link href={'/'}>Home</Link></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText><Link href={'/About'}>About us</Link></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>Services</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>Success stories</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>Contact us</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </header>
    </div>
  );
};

export default Header;
