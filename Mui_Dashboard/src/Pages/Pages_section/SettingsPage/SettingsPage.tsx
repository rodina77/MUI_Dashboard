import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import './index.css'
import BasicBreadcrumbs from '../../../components/Headers/PathHeader';
import FormPropsTextFields from '../../../components/textField/TextInput';
import FormInputs from '../../../components/textField/formInputs';

const SettingsPage = () => {

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{backgroundColor:'white'}}>
        <BasicBreadcrumbs page={'pages'} title={"Settings"}/>
        <Grid size={12} direction={'row'}>

          <FormPropsTextFields />
  
          </Grid>

        <Grid size={12}>
        <FormInputs/>
          </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default SettingsPage;
