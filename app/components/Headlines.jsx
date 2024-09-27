
"use client"

import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from "./style.module.css";
import { headlinesData } from '../dataCentre/StaticData';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Headlines = () => {
  return (
    <Box
      height={{ xs: 'auto', md: '80vh' }} 
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      textAlign={'center'}
      padding={{ xs: '2vmax 1vmax', md: '2vmax 5vmax' }} 
    >
      <Typography variant="h3" style={{ fontWeight: 'bold' }}>
        We are making the headlines
      </Typography>
      <Box
        display={'flex'}
        flexDirection={{ md: 'row' }} 
        flexWrap={{xs:'wrap',md:'no-wrap'}}
        justifyContent={{ xs: 'center', md: 'space-between' }}
        gap={{ xs: '2vmax', md: '1vmax' }}
        padding={{ xs: '1vmax', md: '1vmax 5vmax' }} 
      >
        {headlinesData.map((card, index) => (
          <HoverCard key={index} card={card} index={index} />
        ))}
      </Box>
      <Typography style={{ fontWeight: 'bold', color: '#03518F' }}>
        See all Headlines <ArrowForwardOutlinedIcon />
      </Typography>
    </Box>
  );
};

const HoverCard = ({ card, index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isHovered = hoveredIndex === index;

  return (
    <Box width={{ xs: '90%', sm: '45%', md: '23%' }} margin={{ xs: '0 auto', md: 'inherit' }}> {/* Responsive width */}
      <Card
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        sx={{
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
          border: '1px solid',
          borderColor: isHovered ? '#03518F' : '#EBEBEB',
          boxShadow: '1px 5px 6px #EBEBEB',
          borderRadius: '10px',
          padding: '1vmax',
        }}
      >
        <img height={300} src={card.imgSrc} alt={card.title} style={{ objectFit: 'contain' }} />
      </Card>
      <Typography
        sx={{
          paddingTop: '1vmax',
          display: { xs: 'none', md: 'block' },
        }}
      >
        {card.title}
      </Typography>
    </Box>
  );
};

export default Headlines;

