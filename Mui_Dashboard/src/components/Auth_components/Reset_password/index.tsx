import React from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const ResetPass: React.FC = () => {
  return (
    <Grid container style={{ height: '100vh' }} justifyContent="center" alignItems="center">
      <Paper elevation={3} style={{ padding: '20px', width: '350px', background: 'white', boxShadow: 'none' }}>
        <SignalCellularAltIcon sx={{ color: 'rgb(55, 111, 208)', fontSize: '60px', paddingBottom: '40px', display: 'block', margin: 'auto' }} />
        <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="h1" gutterBottom textAlign="center">
          Reset Password
        </Typography>
        <Typography variant="body2" component="h1" gutterBottom textAlign="center">
          Enter your email to reset your password
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                sx={{ margin: '4px 0px' }}
                fullWidth
                label="Email Address"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                <a style={{color:'white'}} href="/auth/sign up">Reset Password</a>
              </Button>
            </Grid>
            <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center', paddingTop: '10px', display: 'block', margin: 'auto' }}>
              Don't have an account? <a href="/auth/sign up">Sign up</a>
            </Typography>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default ResetPass;
