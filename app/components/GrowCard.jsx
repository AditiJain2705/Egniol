
"use client"

import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import styles from "./style.module.css";
import { growCardData } from '../dataCentre/StaticData';

const GrowCard = ({ cards }) => {

  return (
    <Box sx={{height:{xs:'80vh',md:'60vh'}}}bgcolor={'#EFF6FF'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}>
<Typography variant="h4" style={{fontWeight:'bold'}} paddingTop={'2vmax'}>
Our Expertise helps your startup<br/>
grow at every stage
</Typography>
    <Box display={'flex'} justifyContent={'space-between'} padding={'1vmax 3vmax'} sx={{flexWrap:{xs:'wrap',md:'nowrap'}}}> 
      {growCardData.map((card, index) => (
        <HoverCard key={index} card={card} index={index} />
      ))}
    </Box>
    </Box>

  );
};

const HoverCard = ({ card, index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isHovered = hoveredIndex === index;

  return (
    <Card
     sx={{padding:'1vmax',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', width:{xs:'40%',sm:'40%',md:'24%'}, } }
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        border:isHovered?'1px solid #03518F':'none'
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', padding: '1vmax' }}>
        <img style={{ objectFit: 'contain', maxHeight: '100px', minHeight: '100px' }} src={isHovered ? card.hoverImg : card.imgSrc} alt={card.title} />
      </Box>
      <CardContent>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{card.title}</Typography>
        <Typography variant="caption">{card.subTitle}</Typography>
      </CardContent>
      <Button className={styles.button} style={{ width: '100%', textTransform: "capitalize", fontSize: '0.9vmax', borderRadius: '30px', fontWeight: '600',backgroundColor:'#03518F',color:'white' }}>
        Explore
      </Button>
    </Card>
  );
};

export default GrowCard;

