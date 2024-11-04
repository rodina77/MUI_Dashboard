import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


export default function SimpleCard(props:{cardHeader: string, textOne: string , textTwo: string , textThree: string,textColor: string}) {
  return (
    <Card sx={{  color:'white' ,backgroundColor:"white", marginBottom:'15px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;' ,marginTop:'35px'}}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom sx={{ color: '#424242', fontSize: 16 }}>
            {props.cardHeader}
          </Typography>
        </Box>
        <Typography variant="body2" component="div" sx={{ color: props.textColor , marginBottom:'10px' , fontSize:'12px'}}>
        <TaskAltIcon/> {props.textOne}
        </Typography>
        <Typography variant="body2" component="div" sx={{ color: props.textColor , marginBottom:'10px' , fontSize:'12px'}}>
        <CalendarMonthIcon/> {props.textTwo}
        </Typography>
        <Typography variant="body2" component="div" sx={{ color: props.textColor , marginBottom:'10px' , fontSize:'12px'}}>
        <PeopleOutlineIcon/> {props.textThree}
        </Typography>
      </CardContent>
    </Card>
  );
}
