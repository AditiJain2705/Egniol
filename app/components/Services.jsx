"use client"
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { serviceData } from '../dataCentre/StaticData';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styles from "./style.module.css";

const Services = () => {
  
    const HoverCard = ({ card, index }) => {
        const [hoveredIndex, setHoveredIndex] = useState(null);
      
        const isHovered = hoveredIndex === index;
      
        return (
        <Card
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            
            sx={{
                height: { xs: '25%',sm:'30%', md: '33%' },

                width: { xs: '45%',sm:'40%', md: '33%' },
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                border:'1px solid #EBEBEB',
                borderColor:isHovered?'orangered':'#EBEBEB',
                boxShadow:'1px 5px 6px #EBEBEB',
                objectFit:'contain',borderRadius:'10px',
                padding:'1vmax',
                textAlign:'left',
                marginTop:'5%'
            }}
          >
<CardContent style={{height:'85%', background:'linear-gradient(white, #EFF6FF)'}}>
    <Typography variant='h6' style={{    color:'orangered'
}}>UPTO</Typography>
    <Typography  sx={{fontWeight:"bold",color:'orangered',fontSize:{xs:'1rem',md:'3rem'}}} >{card.money}</Typography>
    <Typography>{card.title}</Typography>
    </CardContent>    
    <CardActions style={{display:'flex',justifyContent:'space-between'}}>
        <img src={card.imgSrc} />
        <Button className={styles.button} style={{borderRadius: '30px',textTransform:'capitalize',width:'50%',backgroundColor:'#03518F',color:'white'}}>Avail Now</Button>
        </CardActions>        
          </Card>
         
        
        );
      };
  return (
    <Box height={'100vh'}  display={'flex'} flexDirection={'column'} justifyContent={'space-around'} textAlign={'center'} style={{background:'linear-gradient( #f9fbff,white )'}}>
    <Typography variant="h4" style={{fontWeight:'bold'}} >
    Most Popular Services (Funding)
    </Typography>
    <Box sx={{ display:'flex' ,justifyContent:"space-between",flexWrap:'wrap',margin:{md:'0% 20%',xs:'0%'}}} > 
      {serviceData.map((card, index) => (
        <HoverCard key={index} card={card} index={index} />
      ))}
    </Box>
    <Typography style={{fontWeight:'bold',color:'#03518F',paddingTop:'1vmax'}}>View all<ArrowForwardOutlinedIcon/></Typography>

    </Box>
  )
 
}

export default Services