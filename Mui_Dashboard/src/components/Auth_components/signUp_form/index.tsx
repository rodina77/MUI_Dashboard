import React from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const SignUpForm: React.FC = () => {

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: 'auto', marginTop:'40px', boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
    <SignalCellularAltIcon sx={{ color: 'rgb(55, 111, 208)', fontSize: '60px', paddingBottom: '40px', display: 'block', margin: 'auto' }} />
      <Typography variant="h5" component="h1" gutterBottom textAlign="center" sx={{fontWeight:'bold'}}>
        Get Started
      </Typography>
      <Typography variant="body2" component="h1" gutterBottom textAlign="center" sx={{color:'rgba(0, 0, 0, 0.87)'}}>
      Start creating the best possible user experience for you customers
      </Typography>
    
      <form>
      <Grid container spacing={2}>
    
  
          <Grid item xs={12}>
            <TextField
            sx={{margin:'2px 0px'}}
              fullWidth
              label="First Name"
              variant="outlined"
              required
            
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{margin:'2px 0px'}}
              fullWidth
              label="last Name"
              type="text"
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              sx={{margin:'2px 0px'}}
              fullWidth
              label="Email"
              variant="outlined"
  
              required
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{margin:'2px 0px'}}
              fullWidth
              label="Password"
              type="password"
              variant="outlined"

              required
            
            />
            </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{margin:'2px 0px'}}
              fullWidth
              label="confirm password"
              type="password"
              variant="outlined"
              required
            />
            </Grid>
        
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              <a style={{color:'white'}} href="/auth/sign in">Sign Up</a>
            </Button>
          </Grid>
          <Typography variant="body2" sx={{fontSize:'12px' , textAlign:'center',paddingTop:'10px', display:'block' , margin:'auto'}}>
          Already have account ? <a href="/auth/sign in">login</a>
          </Typography>
        </Grid>
    
      </form>
    </Paper>
  );
};

export default SignUpForm;
