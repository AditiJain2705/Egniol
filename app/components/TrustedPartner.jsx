
"use client"
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Sample image data
const imagesData = {
    'Ecosystem Partners': ['https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1b.9d717e53.webp&w=384&q=75', 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flending-kart.6f9d0b41.png&w=3840&q=75'], 
    'Business Partners': ['https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1b.9d717e53.webp&w=384&q=75', 'https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flending-kart.6f9d0b41.png&w=3840&q=75'],
    'Communication Partner': ['https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1b.9d717e53.webp&w=384&q=75'],
    'Academic Partner': ['https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1d.31bc1dea.webp&w=384&q=75'],
};

const partnersData = [
  { name: 'Ecosystem Partners' },
  { name: 'Business Partners' },
  { name: 'Communication Partner' },
  { name: 'Academic Partner' },
];

const TrustedPartner = () => {
  const [selectedPartner, setSelectedPartner] = useState('Ecosystem Partners');

  const handlePartnerClick = (name) => {
      setSelectedPartner(name);
  };

  return (
        <Box height={'60vh'} bgcolor={'#EFF2FD'} alignItems={'center'} textAlign={'center'} marginTop={'5%'}>
<Typography variant='h3' style={{fontWeight:'bold',paddingTop:'2vmax'}}>Our trusted Partners</Typography>
<Box  display= {'flex'} justifyContent={'space-around'} height={'50%'} textAlign={'start'} marginTop={'5%'}>
  <Box width={'20%'} marginLeft={'8%'} borderRight={'2px solid #03518F'}>
  <ul style={{ listStyle: 'none', padding: '1vmax', margin: '0 20px' }}>
              {partnersData.map((partner) => (
                  <li 
                      key={partner.name} 
                      onClick={() => handlePartnerClick(partner.name)} 
                      style={{
                        padding:"0.5vmax",
                        color:selectedPartner === partner.name?'#03518F':'black',
                          cursor: 'pointer',
                          fontWeight: selectedPartner === partner.name ? 'bold' : 'normal'
                      }}
                  >
                      {partner.name}
                  </li>
              ))}
          </ul>
  </Box>
         
        
          <Box style={{ width: '80%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
    {imagesData[selectedPartner]?.map((image, index) => (
        <Box key={index} style={{ height: '200px', padding: '0.5vmax', border: '1px solid #c5c0c0',borderRadius:'5px', boxSizing: 'border-box',backgroundColor:'white' }}>
            <img
                src={image}
                alt={selectedPartner}
                style={{
                  height:"100%",
                    width: '300px',
                    objectFit: 'contain',
                    display: 'block',
                }}
            />
        </Box>
    ))}
</Box>

      </Box>
    </Box>
    
  );
};

export default TrustedPartner;
