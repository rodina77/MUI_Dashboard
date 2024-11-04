import { Avatar, Box, TextField } from '@mui/material';

interface MessageElementProps {
  position: 'left' | 'right'; // Position can be either 'left' or 'right'
  messageContent:string;
}

const MessageElement: React.FC<MessageElementProps> = ({ position , messageContent }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        borderRadius: '4px',
        justifyContent: position === 'right' ? 'flex-end' : 'flex-start', // Position input based on prop
        margin: '8px 0', // Space between messages
      }}
    >
      {position === 'right' ? null : (
        <Avatar
          alt="Remy Sharp"
          src="/src/assets/imgs/faceless-business-woman-vector_844724-14846.avif"
          sx={{
            marginRight: '8px', // Space between Avatar and TextField
          }}
        />
      )}
      <TextField
        sx={{
          width: '50%',
          border: 'none', // No border around TextField
          backgroundColor: position === 'right' ? 'rgb(71, 130, 218)' : 'rgba(0, 0, 0, 0.04)', // Match box background
          color: position === 'right' ? 'white' : 'rgba(0, 0, 0, 0.7)', // Text color based on position 
        }}
        disabled
        defaultValue={messageContent}
        variant="filled"
        InputProps={{
          style: {
            border: 'none', // No borders
            backgroundColor: 'transparent', // Match the background color
            padding: '0', // Remove padding if necessary
            color: position === 'right' ? 'white' : 'rgba(0, 0, 0, 0.7)', // Set text color based on position
          },
        }}
      />
      {position === 'right' ? (
        <Avatar
          alt="Remy Sharp"
          src="/src/assets/imgs/3135823.png"
          sx={{
            marginLeft: '8px', // Space between Avatar and TextField for right position
          }}
        />
      ) : null}
      
    </Box>
    
  );
};

export default MessageElement;
