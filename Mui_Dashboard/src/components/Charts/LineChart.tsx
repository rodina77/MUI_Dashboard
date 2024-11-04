import { LineChart } from '@mui/x-charts/LineChart';
import RecipeReviewCard from '../Cards/CardContainer';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BiaxialLineChart() {
  return (
    <>
    <RecipeReviewCard>
    <LineChart
      width={700}
      height={410}
      series={[
        { data: pData, label: 'pv', yAxisId: 'leftAxisId' },
        { data: uData, label: 'uv', yAxisId: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />
    </RecipeReviewCard>
    </>
  );
}
