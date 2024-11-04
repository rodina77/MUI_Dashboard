import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function OutLinedBtn() {
  return (
    <Stack spacing={2} direction="row" sx={{ display:'block',margin:'auto'}}>
      <Button variant="outlined" sx={{fontSize:'13px' , color:'#2196f3' }}>SignUp For Free</Button>
    </Stack>
  );
}