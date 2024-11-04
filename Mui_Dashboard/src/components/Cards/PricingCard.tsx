import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function PricingCard({Button}) {

  return (
    <Card sx={{ minWidth:275 ,textAlign:'center' , padding:'10px 0px' , boxShadow:' none' }}>
      <CardContent>
        <Typography gutterBottom sx={{  fontSize: 14 }}>
          Free
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Typography variant="body2" sx={{fontSize:'35px' , fontWeight:'bold'}}>
          $15/ <span style={{color:'gray', fontSize:'20px'}}>mo</span> 
          <br />
        </Typography>
        <Typography variant="body2">
          <p>20 users included <br/>10 GB of storage<br/>Help center access<br/>Priority email support</p>
        </Typography>
      </CardContent>
      <CardActions sx={{display:'block', margin:'auto'}}>
        {Button}
      </CardActions>
    </Card>
  );
}
