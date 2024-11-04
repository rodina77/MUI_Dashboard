import { BarChart } from '@mui/x-charts/BarChart';
import RecipeReviewCard from '../Cards/CardContainer';
import { Box } from '@mui/material';

export default function BasicBars() {
  return (
    <RecipeReviewCard>
      <Box
        sx={{
          width: '100%', // Make the Box take the full width
          height: '250px', // Set a fixed height for the chart
          position: 'relative', // Ensure the chart's position is relative for responsive behavior
        }}
      >
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[
            {
              data: [4, 3, 5],
              color: '#2196f3', // Blue color for the first series
            },
            {
              data: [1, 6, 3],
              color: '#cfd8dc', // Gray color for the second series
            },
            {
              data: [1, 6, 3],
              color: '#cfd8dc', // Gray color for the second series
            },
            {
              data: [1, 6, 3],
              color: '#cfd8dc', // Gray color for the second series
            },
            {
              data: [4, 3, 5],
              color: '#2196f3', // Blue color for the first series
            },
            {
              data: [1, 6, 3],
              color: '#cfd8dc', // Gray color for the second series
            },
            {
              data: [4, 3, 5],
              color: '#2196f3', // Blue color for the first series
            },
            {
              data: [4, 3, 5],
              color: '#2196f3', // Blue color for the first series
            },
          ]}
      
        />
      </Box>
    </RecipeReviewCard>
  );
}
