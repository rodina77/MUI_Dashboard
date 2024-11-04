import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BasicCard from '../../../components/Cards/Card';
import PieChartWithCenterLabel from '../../../components/Charts/BarChart';
import BasicBars from '../../../components/Charts/histogram';
import PageContainerBasic from '../../../components/Headers/NavHeader';
import BiaxialLineChart from '../../../components/Charts/LineChart';
import BasicTableBadge from '../../../components/Tables/TablesWithBadge';
import './index.css';

const red: string = '#ff8a80';
const green: string = '#a5d6a7';
const CardBackground: string = 'rgba(55, 111, 208, 0.125)';
const TextColor: string = 'rgb(55, 111, 208)';
const WhiteBackground: string = 'white';

export default function DefaultPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageContainerBasic />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <BasicCard color={red} CardBackground={WhiteBackground} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard color={green} CardBackground={WhiteBackground}  />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard color={red} CardBackground={WhiteBackground}  />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BasicCard color={TextColor} CardBackground={CardBackground}  />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={8}>
          <BiaxialLineChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <PieChartWithCenterLabel />
        </Grid>
        <Grid item xs={12} md={4}>
          <BasicBars />
        </Grid>
        <Grid item xs={12} md={8}>
          <BasicTableBadge />
        </Grid>
      </Grid>
    </Box>
  );
}
