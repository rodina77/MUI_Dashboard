import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomizedProgressBars from '../ProgressLine';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
export default function PaymentCard(props:{salary:string}) {
  return (
    <Card sx={{  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;' }}>
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 24 }}>
          {props.salary}
          <AttachMoneyOutlinedIcon sx={{color:'#2196f3' , float:'right', fontSize:'40px'}}/>
        </Typography>
        <Typography variant="body2" sx={{color: 'text.secondary'}}>
        Total Earnings
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <CustomizedProgressBars value={60}/>
      </CardActions>
    </Card>
  );
}
