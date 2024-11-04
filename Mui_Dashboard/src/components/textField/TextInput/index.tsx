import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import DisableElevation from '../../Button/Button';
import UploadCard from '../../Cards/uploadCard';

export default function FormPropsTextFields() {
  const title: string = "Save Changes";

  return (
    <Box
      component="form"
      sx={{display:'flex', backgroundColor: 'white', padding: '30px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} xs={12} sm={12} lg={12}>
        <Grid item xs={12}>
          <p style={{ fontSize: '20px', marginBottom: '16px' }}>Public Info</p>
        </Grid>
        
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
          sx={{width:'100%' , marginBottom:'20px'}}
            required
            id="outlined-required-username"
            label="User Name"
            defaultValue="lucy lavender"
            fullWidth
          />
            <TextField
            sx={{ height: '100px' }}
            required
            id="outlined-required-biography"
            label="Biography"
            defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
            multiline
            maxRows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <DisableElevation title={title} />
        </Grid>
      </Grid>

      <UploadCard />
    </Box>
  );
}
