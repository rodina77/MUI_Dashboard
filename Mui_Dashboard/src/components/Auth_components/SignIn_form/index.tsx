import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Avatar,
  FormControlLabel,
  Checkbox,
  Alert,
} from '@mui/material';
const SignInForm: React.FC = () => {
  const [email, setEmail] = useState<string>('demo@bootlab.io');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
    <Grid container justifyContent="center" sx={{ height: '100vh' }}>
        <Paper elevation={3} sx={{width:'450px', padding: '40px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
          <Grid container justifyContent="center" sx={{ marginBottom: 2 }}>
            <Avatar sx={{ width: 56, height: 56 }} src="/src/assets/imgs/faceless-business-woman-vector_844724-14846.avif" />
          </Grid>
          <Typography variant="h5" component="h1" gutterBottom textAlign="center">
            Welcome Back, Lucy!
          </Typography>
          <Typography variant="body2" component="h1" gutterBottom textAlign="center">
            Sign in to your account to continue
          </Typography>
          <Alert sx={{ margin: '20px 0' , fontSize:'12px' }} severity="info">Use demo@bootlab.io and unsafepassword to sign in</Alert>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value="demo@bootlab.io"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item container alignItems="center" xs={12}>
                <Grid item xs>
                  <Typography variant="body2">
                    <a href="#" style={{ textDecoration: 'none', color: '#3f51b5', fontSize:'15px' }}>
                      Forgot Password?
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" xs={12}>
                <Grid item>
                  <FormControlLabel
                  sx={{fontSize:'12px'}}
                    control={<Checkbox color="primary" />}
                    label="Remember Me"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  <a style={{color:'white'}} href="/Dashboards/Default">Sign In</a>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ fontSize: '12px', textAlign: 'center', paddingTop: '10px' }}>
                  Don't have an account yet? <a href="">Sign up</a>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
      </>
  );
};

export default SignInForm;
