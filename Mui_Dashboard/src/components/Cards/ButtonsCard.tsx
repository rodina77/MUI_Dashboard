import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const ButtonCard: React.FC = () => {

  return (
    <Card sx={{marginTop:'20px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px; '}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Skills
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Button variant="contained" size="small">
          html
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)' , boxShadow:'none', color:"black"}} size="small">
          JS
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)' , boxShadow:'none', color:"black"}} size="small">
          Sass
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)' , boxShadow:'none', color:"black"}} size="small">
          React
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)' , boxShadow:'none', color:"black"}} size="small">
          Redux
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)', boxShadow:'none', color:"black"}} size="small">
          NextJS
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08) ', boxShadow:'none', color:"black"}} size="small">
          Material UI
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)', boxShadow:'none', color:"black"}} size="small">
          UI
        </Button>
        <Button variant="contained" sx={{backgroundColor:'rgba(0, 0, 0, 0.08)' , boxShadow:'none', color:"black"}} size="small">
          UX
        </Button>
        </Grid>
        </Box>
        
      </CardActions>
    </Card>
  );
};

export default ButtonCard;
