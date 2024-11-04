// ProgressLine.tsx
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:130,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: '#1a90ff',
    },
  },
}));

interface CustomizedProgressBarsProps {
  value: number; // Accept value as a prop
}

export default function CustomizedProgressBars({ value }: CustomizedProgressBarsProps) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Stack>
  );
}
