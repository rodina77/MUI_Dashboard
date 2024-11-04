import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicBreadcrumbs from '../../../components/Headers/PathHeader';
import MediaCard from '../../../components/Cards/ProfileCard';
import ButtonCard from '../../../components/Cards/ButtonsCard';
import SimpleCard from '../../../components/Cards/SimpleCard';
import BasicBars from '../../../components/Charts/histogram';
import PaymentCard from '../../../components/Cards/PaymentCard';
import BasicTableBadge from '../../../components/Tables/TablesWithBadge';

const Card_Header: string = "About";
const textLineOne: string = "Lives in San Francisco, SA";
const textLineTwo: string = "Works at Material UI";
const textLineThree: string = "Lives in Boston";
const TextOne_color: string = "#2196f3";
const TextTwo_color: string = "black";
const Card_two_Header: string = "Elsewhere";
const textTwoLineOne: string = "lucylavender.io";
const textTwoLineTwo: string = "Facebook";
const textTwoLineThree: string = "Instagram";
const CardSalaryOne: string = "$2,045";
const CardSalaryTwo: string = "$30";
const CardSalaryThree: string = "$1,224";

const ProfilePage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '0px 20px' }}>
        <Grid container spacing={2}>
          <BasicBreadcrumbs page={'pages'} title={"Profile"}/>

          <Grid item xs={12} md={12} lg={3}>
            <Grid container direction="column" spacing={0} style={{ height: '100%', margin: '0px 10px' }}>
              <Grid item xs>
                <MediaCard />
              </Grid>
              <Grid item xs>
                <ButtonCard />
              </Grid>
              <Grid item xs>
                <SimpleCard cardHeader={Card_Header} textOne={textLineOne} textTwo={textLineTwo} textThree={textLineThree} textColor={TextOne_color} />
              </Grid>
              <Grid item xs>
                <SimpleCard cardHeader={Card_two_Header} textOne={textTwoLineOne} textTwo={textTwoLineTwo} textThree={textTwoLineThree} textColor={TextTwo_color} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={9}>
            <Grid container direction="column" spacing={0}>
              <Grid item xs>
                <BasicBars />
              </Grid>
              <Grid item xs>
                <Grid item xs={12} sm={12} lg={12}>
                  <Grid container spacing={2} justifyContent="flex-start">
                    {/* Payment Cards */}
                    <Grid item xs={12} sm={12} lg={4}>
                      <PaymentCard salary={CardSalaryOne} />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <PaymentCard salary={CardSalaryTwo} />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <PaymentCard salary={CardSalaryThree} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid item xs={12} style={{ height: '100%', margin: '0px 20px', overflowY: 'auto' }}>
                  <BasicTableBadge />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProfilePage;
