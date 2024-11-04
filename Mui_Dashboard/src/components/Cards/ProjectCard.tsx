import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GroupAvatars from '../Avatar_Group';

export default function ProjectCard(props:{srcImg?:string , title:string , status:string , statusBackground:string }) {
  return (
    <Card sx={{ boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px;' }} >
      {
        props.srcImg ? <CardMedia
        sx={{ height: 250 }}
        image={props.srcImg}
        title="green iguana" 
      />
      : ''
      }
      
      <CardContent sx={{borderBottom: '1px solid rgb(224, 224, 224);'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'17px'}}>
        {props.title}
        </Typography>
        <Typography gutterBottom variant="body1"  sx={{ color: 'white' ,fontSize:'12px', backgroundColor:props.statusBackground , width:'80px' , padding:'2px 5px', borderRadius:'10px'}} component="div">
        {props.status}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' , fontSize:'12px' }}>
        Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.
        </Typography>
       <GroupAvatars/>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
