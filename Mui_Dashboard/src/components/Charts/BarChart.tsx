import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import BasicTable from '../Tables/Table';
import RecipeReviewCard from '../Cards/CardContainer';

// Data for the pie chart
const data = [
  { value: 8, label: 'A' },
  { value: 6, label: 'B' },
  { value: 2, label: 'C' },
  { value: 5, label: 'D' },
];

// Size configuration for the chart
const size = {
  height: 200,
};

// Styled text for the center label
const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

// Component for the center label of the pie chart
function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

// Main component for the pie chart with a center label
export default function PieChartWithCenterLabel() {
  // Define custom colors for each slice
  const colors = ['#2196f3', '#f44336', '#ff5722', '#cfd8dc'];

  return (
    <>
      <RecipeReviewCard>
        <PieChart 
          series={[{ data, innerRadius: 80 }]} 
          {...size}
          colors={colors}>
          <PieCenterLabel>
            +27%
          </PieCenterLabel>
        </PieChart>
        <BasicTable/>
      </RecipeReviewCard>
    </>
  );
}
