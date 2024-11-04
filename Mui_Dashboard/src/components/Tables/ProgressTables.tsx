import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomizedProgressBars from '../ProgressLine';
import RecipeReviewCard from '../Cards/CardContainer';

function createData(
  name: string,
  fat: number,
  carbs: number,
  protein: number,
  progressValue: number, // Add a progress value to the row
) {
  return { name, fat, carbs, protein, progressValue };
}

const rows = [
  createData('Frozen', 6.0, 24, 4.0, 60), // Example values
  createData('Ice', 9.0, 37, 4.3, 50),
  createData('Eclair', 16.0, 24, 6.0, 40),
  createData('Eclair', 16.0, 24, 6.0, 30),
  createData('Eclair', 16.0, 24, 6.0, 20),
];

export default function BasicProgressTable() {
  return (
    <RecipeReviewCard>
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table sx={{ maxWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{fontSize:'13px'}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{fontSize:'13px'}} align="right">{row.fat}</TableCell>
              <TableCell align="right" sx={{ color: 'green' ,fontSize:'13px' }}>
                <CustomizedProgressBars value={row.progressValue} /> {/* Pass the progress value */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </RecipeReviewCard>
  );
}
