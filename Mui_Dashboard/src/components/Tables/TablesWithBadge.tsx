import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RecipeReviewCard from '../Cards/CardContainer';
import Box from '@mui/material/Box';

function createData(name: string, startDate: string, endDate: string, status: string, protein: number) {
  return { name, startDate, endDate, status, protein };
}

const rows = [
  createData('Frozen yoghurt', '31/09/2001', '03/09/2001', 'Active', 4.0),
  createData('Ice cream sandwich', '08/09/2001', '27/09/2001', 'Inactive', 4.3),
  createData('Eclair', '01/09/2001', '29/09/2001', 'Pending', 6.0),
  createData('Cupcake', '29/09/2001', '31/09/2001', 'Active', 4.3),
  createData('Gingerbread', '03/09/2001', '01/09/2001', 'Inactive', 3.9),
  createData('Cupcake', '29/09/2001', '31/09/2001', 'Active', 4.3),
];

export default function BasicTableBadge() {
  return (
    <RecipeReviewCard>
      <Box sx={{ overflowX: 'auto', width: '100%',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;' }}>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ minWidth: '600px', textAlign: 'center' , fontSize:'12px' }} aria-label="responsive table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert</TableCell>
                <TableCell align="right">Start Date</TableCell>
                <TableCell align="right">End Date</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{fontSize:'12px'}}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{fontSize:'12px'}}>{row.startDate}</TableCell>
                  <TableCell align="right" sx={{fontSize:'12px'}}>{row.endDate}</TableCell>
                  <TableCell align="right" sx={{fontSize:'12px'}}>
                    <Box
                      sx={{
                        bgcolor: row.status === 'Active' ? '#66bb6a' :
                                 row.status === 'Inactive' ? '#f44336' :
                                 '#ffca28',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '4px 10px',
                        display: 'inline-block',
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell sx={{fontSize:'12px'}} align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </RecipeReviewCard>
  );
}
