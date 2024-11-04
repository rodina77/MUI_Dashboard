import GroupAvatars from "../Avatar_Group";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { Box } from "@mui/material";

const TasksCard = (props :{proColor:string, preColor:string , iconColor:string , title:string}) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: "15px", height: 150, boxShadow: 'none' , border:'1px solid #Dfd8dc' }}>
      <CardContent>
        <Box sx={{display:'flex',direction:"row"}}>
      <Typography variant="body2" sx={{width:'40px' , height:'6px',borderRadius:'20px', marginRight:'10px', marginBottom:'10px' , backgroundColor:props.preColor}}>
          
          <br />
        </Typography>
      <Typography variant="body2" sx={{width:'40px' , height:'6px',borderRadius:'20px', marginBottom:'10px' , backgroundColor:props.proColor}}>
          
          <br />
        </Typography>
        </Box>
        <Typography variant="body1" sx={{fontWeight:'700'}}>
          {props.title}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-between'}}>
        <GroupAvatars />
        <MapsUgcOutlinedIcon sx={{color:props.iconColor}}/>
      </CardActions>
    </Card>
  );
}

export default TasksCard;
