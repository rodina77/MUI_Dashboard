import { Box, TextField } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import MessageElement from '../../../components/Chatting_Elements/Message_container';
import BasicBreadcrumbs from '../../../components/Headers/PathHeader';
import ChattingProfile from '../../../components/Chatting_Elements/ChattingProfile';

const ChatComponent: React.FC = () => {
  return (
    <Box >
      <BasicBreadcrumbs page={'pages'} title={"Chatting"}/>
  
        <Grid container spacing={2} sx={{padding:'25px'}}>
          <Grid size={3} sm={12} xs={12} lg={3}>
          <TextField id="outlined-basic" label="Search" variant="outlined" sx={{width:'100%'}} />
          <hr style={{color:'#eeeeee' , margin:'10px 0px'}} />
          <ChattingProfile senderName={"Lucy Lavender"} message={"where are you ?"} srcImg='/src/assets/imgs/faceless-business-woman-vector_844724-14846.avif'/>
      <ChattingProfile senderName={"Remy Sharp"} message={"Coffie ?"} srcImg='/src/assets/imgs/images.jpeg'/>
      <ChattingProfile senderName={"Madlen Greek"} message={"sent you a photo"} srcImg='/src/assets/imgs/печать-woman-avatar-profile-female-face-icon-vector-illustration-226594813.webp'/>
          </Grid>
        <Grid size={9} sm={12} xs={12} lg={9} sx={{
        maxHeight: '400px', // Define a max height for the chat container
        overflowY: 'auto', // Enable vertical scrolling
        border: '1px solid #ccc', // Optional: border for better visibility
        borderRadius: '4px', // Optional: rounded corners
        padding: '8px', // Optional: space inside the container
      }}>
      <MessageElement position="left" messageContent="Remy Sharp Sit meis deleniti eu, pri "/>
      <MessageElement position="right" messageContent='Lorem ipsum dolor sit amet, vis erat denique'/>
      <MessageElement position="left" messageContent='Cum ea graeci tractatos. 😄'/>
      <MessageElement position="right" messageContent='Cras pulvinar, sapien . 👍'/>
      <MessageElement position="left" messageContent='Lorem ipsum dolor sit amet, vis erat'/>

      <Box sx={{display:'flex', position:'sticky' , bottom:'0' , backgroundColor:'white'}} >
      <TextField fullWidth label="Type Your Message" id="fullWidth" /> <SendIcon sx={{backgroundColor:'rgb(71, 130, 218)' ,padding:'7px',margin:'7px', borderRadius:'180px'  ,fontSize:'40px', color:'white'}}/>
      </Box>
      </Grid>
    
      
  
      </Grid>
    
    </Box>
  );
};

export default ChatComponent;
