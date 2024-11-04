import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DisableElevation from '../Button/Button';
import { Avatar } from '@mui/material';

export default function MediaCard() {
  const Follow_Button:string= "Follow"
  const Message_Button:string= "Message"

  return (
    <Card sx={{  marginTop:'20px',padding:'10px', boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>

<Typography gutterBottom variant="body2" component="div" sx={{ fontSize:'15px'}}>
        Profile page
        </Typography>

       <Avatar 
        alt="Lucy Lavender" 
        src="/src/assets/imgs/faceless-business-woman-vector_844724-14846.avif" 
        sx={{ width: 100, height: 100, margin: '0 auto' }} // Style for the avatar
      />
  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center' , fontSize:'15px'}}>
        Lucy Lavender
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'center', fontSize:'12px' }}>
        Lead Developer
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center'}}>
      <DisableElevation title={Follow_Button}/>
      <DisableElevation title={Message_Button}/>
      </CardActions>
    </Card>
  );
}
