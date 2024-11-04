import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
import RecipeReviewCard from '../Cards/CardContainer';

export default function CustomLabels() {
  const theme = useTheme();  // Get the current theme

  return (
    <RecipeReviewCard>
    <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1', color: theme.palette.primary.main }, // Primary color
        { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2', color: theme.palette.grey[200] }, // Light grey
        { data: [14, 6, 5, 8, 9], label: 'Series B1', color: theme.palette.grey[100] }, // Darker grey
      ]}
      barLabel={(item, context) => {
        if ((item.value ?? 0) > 10) {
          return 'High';
        }
        return context.bar.height < 60 ? null : item.value?.toString();
      }}
      width={600}
      height={300}
    />
    </RecipeReviewCard>
  );
}
