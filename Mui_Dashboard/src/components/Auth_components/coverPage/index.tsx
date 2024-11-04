import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

const CoverPage = ({children}) => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={12} sm={7} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img
            id='cover_img'
            src="/src/assets/imgs/unsplash-5.jpg"
            alt=""
            width="100%"
            height="100%"
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CoverPage;
