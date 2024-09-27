
// "use client"

// import { Box, Card, CardContent, Typography, Button } from '@mui/material';
// import React, { useState } from 'react';
// import styles from "./style.module.css";
// import { growCardData } from '../dataCentre/StaticData';

// const GrowCard = ({ cards }) => {

//   return (
//     <Box height={'60vh'} bgcolor={'#EFF6FF'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}>
// <Typography variant="h4" style={{fontWeight:'bold'}} paddingTop={'2vmax'}>
// Our Expertise helps your startup<br/>
// grow at every stage
// </Typography>
//     <Box display={'flex'} justifyContent={'space-between'} padding={'1vmax 3vmax'}> 
//       {growCardData.map((card, index) => (
//         <HoverCard key={index} card={card} index={index} />
//       ))}
//     </Box>
//     </Box>

//   );
// };

// const HoverCard = ({ card, index }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const isHovered = hoveredIndex === index;

//   return (
//     <Card
//       className={styles.growCard}
//       onMouseEnter={() => setHoveredIndex(index)}
//       onMouseLeave={() => setHoveredIndex(null)}
//       style={{
//         transition: 'transform 0.3s ease',
//         transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
//         border:isHovered?'1px solid #03518F':'none'
//       }}
//     >
//       <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60%', padding: '1vmax' }}>
//         <img style={{ objectFit: 'contain', maxHeight: '100px', minHeight: '100px' }} src={isHovered ? card.hoverImg : card.imgSrc} alt={card.title} />
//       </Box>
//       <CardContent>
//         <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{card.title}</Typography>
//         <Typography variant="caption">{card.subTitle}</Typography>
//       </CardContent>
//       <Button className={styles.button} style={{ width: '100%', textTransform: "capitalize", fontSize: '0.9vmax', borderRadius: '30px', fontWeight: '600' }}>
//         Explore
//       </Button>
//     </Card>
//   );
// };

// export default GrowCard;

"use client"

import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import styles from "./style.module.css";
import { growCardData } from '../dataCentre/StaticData';

const GrowCard = () => {
  return (
    <Box height={{ xs: 'auto', md: '60vh' }} bgcolor={'#EFF6FF'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'}>
      <Typography variant="h4" style={{ fontWeight: 'bold' }} paddingTop={{ xs: '1vmax', md: '2vmax' }}>
        Our Expertise helps your startup<br />
        grow at every stage
      </Typography>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', md: 'space-between' }}
        alignItems={'stretch'} // Ensures all items stretch to the same height
        padding={{ xs: '1vmax', md: '1vmax 3vmax' }}
        gap={{ xs: '2vmax', sm: '1vmax' }}
      >
        {growCardData.map((card, index) => (
          <HoverCard key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
};

const HoverCard = ({ card }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Card
      className={'p-10 flex justify-center items-center flex-col '}
      onMouseEnter={() => setHoveredIndex(card.index)}
      onMouseLeave={() => setHoveredIndex(null)}
      sx={{
        width: { xs: '100%', sm: '60%', md: '30%' },
        display: 'flex',
        flexDirection: 'column', // Ensures the content aligns vertically
        justifyContent: 'space-between', // Aligns content to stretch to the bottom
        transition: 'transform 0.3s ease',
        transform: hoveredIndex ? 'translateY(-5px)' : 'translateY(0)',
        border: hoveredIndex ? '1px solid #03518F' : 'none',
        height: '100%', // Full height for consistent card size
        margin: { xs: '0 auto', sm: 'inherit' },
      }}
    >
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60%',
          padding: '1vmax',
        }}
      >
        <img
          style={{ objectFit: 'contain', maxHeight: '100px', minHeight: '100px' }}
          src={hoveredIndex ? card.hoverImg : card.imgSrc}
          alt={card.title}
        />
      </Box>
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          {card.title}
        </Typography>
        <Typography variant="caption">{card.subTitle}</Typography>
      </CardContent>
      <Button
        className={styles.button}
        sx={{
          width: '100%',
          textTransform: 'capitalize',
          fontSize: { xs: '1vmax', sm: '0.9vmax' },
          borderRadius: '30px',
          fontWeight: '600',
        }}
      >
        Explore
      </Button>
    </Card>
  );
};

export default GrowCard;
