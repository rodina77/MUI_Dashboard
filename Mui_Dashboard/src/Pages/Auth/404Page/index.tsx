import { Box, Typography } from "@mui/material";
import DisableElevation from "../../../components/Button/Button";

const Page404 = (props:{title:string , subTitle:string , body:string}) => {
  return (
    <>
    <Box sx={{textAlign:'center' , display:'flex' ,padding:'0px 20px', flexDirection:'column' , justifyContent:'center', alignItems:'center' , height:'600px'}}>
      <Typography variant="h4" sx={{margin:'10px' , fontWeight:'bold' , color:'rgba(0, 0, 0, 0.87)'}}>
      {props.title}

      </Typography>
      <Typography variant="h5" sx={{marginBottom:'5px', color:'rgba(0, 0, 0, 0.87)'}}>
      {props.subTitle}

      </Typography>
      <Typography variant="body2" sx={{marginBottom:'10px',padding:'opx 20px', color:'rgba(0, 0, 0, 0.87)'}}>
      {props.body}
      </Typography>
      <DisableElevation title={"Return to website"}/>
    </Box>
      
    </>
  );
}

export default Page404;
