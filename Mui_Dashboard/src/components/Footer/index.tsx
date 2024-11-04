import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        padding: 3, 
        backgroundColor: '#f5f5f5', 
        justifyContent: 'space-between',
        color:'#616161',
        fontSize: '5px',
        marginTop: '10px',
        position: 'static',
      }}>

      <span style={{  display: 'flex'}}>
      <Typography sx={{padding:'0px 10px',fontSize: '12px'}} variant="body1">Support</Typography>
      <Typography sx={{padding:'0px 10px',fontSize: '12px'}} variant="body1">Help Center</Typography>
      <Typography sx={{padding:'0px 10px',fontSize: '12px'}} variant="body1">Privacy</Typography>
      <Typography sx={{padding:'0px 10px',fontSize: '12px'}} variant="body1">Term of service</Typography>
      </span>
      <span style={{  display: 'flex'}}>
      <Typography sx={{padding:'0px 10px',fontSize: '12px'}} variant="body1">@2010</Typography>
      <Typography sx={{padding:'0px 10px',fontSize: '12px'}} variant="body1">Mira</Typography>
      </span>
    
    </Box>
    </>
  );
}
