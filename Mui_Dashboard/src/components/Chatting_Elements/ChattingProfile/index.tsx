import { Avatar, Box } from '@mui/material';

const MessageComponent = (props :{srcImg:string, senderName:string , message : string}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Box sx={{ position: 'relative' }}>
        <Avatar alt="Profile Avatar" src={props.srcImg} sx={{ width: '50px', height: '50px' }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            bgcolor: '#66bb6a',
            borderRadius: '50%',
            width: '13px',
            height: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        </Box>
      </Box>
      <Box sx={{ marginLeft: '10px' }}>
        <h6 style={{ color: 'gray', margin: 0 }}>{props.senderName}</h6>
        <p style={{ color: 'gray', margin: 0 }}>{props.message}</p>
      </Box>
    </Box>
  );
};

export default MessageComponent;
