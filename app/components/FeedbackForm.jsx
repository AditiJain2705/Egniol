import { Box, ListItemText, Typography } from '@mui/material'
import React from 'react'
import MessageForm from './MessageForm'

const FeedbackForm = () => {
  return (
   <Box sx={{height:{xs:'60vh',md:'40vh'}}}display={'flex'} justifyContent={'center'} flexDirection={'column'}textAlign={'center'} alignItems={'center'} bgcolor={'#EFF6FF'}>
<Typography variant='h4' style={{fontWeight:'bold',paddingTop:'3vmax'}}>
Get started with Egniol today   
</Typography>
<ListItemText style={{paddingTop:'1vmax'}}secondary={"Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible."}/>
<Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
<MessageForm/>

</Box>
   </Box>
  )
}

export default FeedbackForm