import { Box } from '@mui/material';
import ResetPass from '../Reset_password';
import CoverPage from '../coverPage';

const ResetPasssCover = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <CoverPage>
      <ResetPass />
      </CoverPage>
    </Box>
  );
}

export default ResetPasssCover;
