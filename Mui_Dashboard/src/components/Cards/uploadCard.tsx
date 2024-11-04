import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import InputFileUpload from '../Button/uploadBtn';

export default function UploadCard() {

  return (
    <Card sx={{ marginTop:'20px', boxShadow:'none'}}>
       <Avatar 
        alt="Lucy Lavender" 
        src="/src/assets/imgs/faceless-business-woman-vector_844724-14846.avif" 
        sx={{ width: 150, height: 150, margin: '0 auto' }}
      />
      <CardActions sx={{justifyContent:'center'}}>
      <InputFileUpload/>
      </CardActions>
      <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center' , fontSize:'13px'}}>
      For best results, use an image at least 128px by 128px in .jpg format
        </Typography>
    </Card>
  );
}
