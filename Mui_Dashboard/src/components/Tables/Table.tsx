import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, carbs, protein };
}

const rows = [
  createData('Frozen', 159, 24, 4.0),
  createData('Ice', 237, 37, 4.3),
  createData('Eclair', 262, 24, 6.0),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow:'none' }}>
      <Table sx={{ width:'100%' }} aria-label="simple table">
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
              <TableCell component="th" scope="row" sx={{fontSize:'13px'}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{fontSize:'13px'}}>{row.calories}</TableCell>
              <TableCell align="right" sx={{ color: 'green' , fontSize:'13px'}}>
                {row.calories} 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
