import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './index.css'
import BasicBreadcrumbs from '../../../components/Headers/PathHeader';
import PricingCard from '../../../components/Cards/PricingCard';
import OutLinedBtn from '../../../components/Button/OutLinedButton';
import DisableElevation from '../../../components/Button/Button';

const PricingPage = () => {
  const title:string ="Get Started"

  return (
    <>
    <Box sx={{ flexGrow: 1 , padding:'0px 50px' }}>
    <BasicBreadcrumbs page={'pages'} title={"Pricing"}/>
    <h1 style={{textAlign:'center', padding:'10px', fontWeight:'100'}}>We have a plan for everyone</h1>
    <p style={{textAlign:'center', fontSize:'13px' , paddingBottom:'20px', marginBottom:'20px' }}>Whether you're a business or an individual, 14-day trial no credit card required.</p>
      <Grid container spacing={2} sx={{justifyContent:'center'}}>
        <Grid lg={4} sm={12} xs={12}>
          <PricingCard Button={<OutLinedBtn/>}/>
          </Grid>
        <Grid lg={4} sm={12} xs={12}>
          <PricingCard Button={<DisableElevation title={title}/>}/>
          </Grid>
        <Grid lg={4} sm={12} xs={12}>
          <PricingCard Button={<OutLinedBtn/>}/>
          </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default PricingPage;
