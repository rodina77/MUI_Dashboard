import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './index.css';
import PageContainerBasic from '../../../components/Headers/NavHeader';
import BasicCard from '../../../components/Cards/Card';
import BasicBars from '../../../components/Charts/histogram';
import MapChart from '../../../components/Charts/MapChart';
import BasicProgressTable from '../../../components/Tables/ProgressTables';
import PieChartWithCenterLabel from '../../../components/Charts/BarChart';
import BasicTableBadge from '../../../components/Tables/TablesWithBadge';

const Analytics = () => {
  const red = '#ff8a80';
  const green = '#a5d6a7';
  const CardBackground = 'rgba(55, 111, 208, 0.125)';
  const WhiteBackground = 'white';

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '0px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PageContainerBasic />
          </Grid>
          
          {/* Adjusted grid sizes for responsiveness */}
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <BasicCard color={red} CardBackground={CardBackground} />
            <BasicCard color={red} CardBackground={WhiteBackground} />
            
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={3}>
            <BasicCard color={green} CardBackground={WhiteBackground} />
            <BasicCard color={green} CardBackground={WhiteBackground} />
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <BasicBars />
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <MapChart />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <PieChartWithCenterLabel />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <BasicProgressTable />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <BasicTableBadge />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Analytics;
