import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props:{color: string , CardBackground : string  }) {
  return (
    <Card sx={{ backgroundColor:props.CardBackground , color:'white' , marginBottom:'15px' ,marginTop:'15px' , boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px;'}}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom sx={{ color: '#424242', fontSize: 13 }}>
            Sales Today
            {bull} 
          </Typography>
          <Button variant="contained" color="primary" sx={{padding:'0', border:'1px solid transparent' ,fontSize:'12px', borderRadius:'5px'}} size="small">
            Today
          </Button>
        </Box>
        <Typography variant="h6" component="div" sx={{ color: '#424242' , marginBottom:'10px'}}>
          2.532
        </Typography>
        <Typography variant="body2" sx={{ color: '#757575' , fontSize:'13px'}}>
        <span style={{ backgroundColor: props.color ,fontSize:'12px', color:'white', padding: '2px 4px', margin : '0px 3px', borderRadius: '4px' }}>
            {'"+26%"'} 
          </span> Since Last Month
        </Typography>
      </CardContent>
    </Card>
  );
}
