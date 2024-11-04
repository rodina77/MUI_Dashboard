import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Visibility, Download } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'; 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'OrderID', width: 130 },
  { field: 'firstName', headerName: 'Product', width: 130 },
  { field: 'lastName', headerName: 'Date', width: 130 },
  {
    field: 'age',
    headerName: 'Total',
    type: 'number',
    width: 130,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has custom rendering based on status.',
    sortable: false,
    width: 190,
    renderCell: (params) => {
      const status = params.row.status;
      let backgroundColor = '';

      switch (status) {
        case 'Shipped':
          backgroundColor = 'rgb(76, 175, 80)';
          break;
        case 'Pending':
          backgroundColor = 'rgb(245, 124, 0)';
          break;
        case 'Cancelled':
          backgroundColor = 'rgb(244, 67, 54)';
          break;
        default:
          backgroundColor = 'gray';
      }

      return (
        <div style={{
          display: 'inline-block',
          backgroundColor,
          color: 'white',
          borderRadius: '5px',
          textAlign: 'center',
          lineHeight: '20px',
          padding: '2px 9px',
        }}>
          {status}
        </div>
      );
    },
  },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    description: 'Method of payment used.',
    sortable: false,
    width: 250,
  },
  {
    field: 'Actions',
    headerName: 'Actions',
    description: 'Actions you can take.',
    sortable: false,
    width: 190,
    renderCell: (params) => (
      <div>
        <IconButton onClick={() => console.log("View", params.row.id)}>
          <Visibility />
        </IconButton>
        <IconButton onClick={() => console.log("Download", params.row.id)}>
          <Download />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'Pending', paymentMethod: 'Cash' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Cancelled', paymentMethod: 'MasterCard' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Shipped', paymentMethod: 'PayPal' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 76, status: 'Pending', paymentMethod: 'Debit Card' },
  { id: 6, lastName: 'Melisandre', firstName: "Rossini", age: 150, status: 'Cancelled', paymentMethod: 'Venmo' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Pending', paymentMethod: 'Cash' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Cancelled', paymentMethod: 'MasterCard' },
];

const paginationModel = { page: 0, pageSize: 18 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 600, width: '100%' }}>
    
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 20]}
        checkboxSelection
        sx={{
          border: 0,
          '& .MuiDataGrid-row': {
            padding: '20px 0', 
            fontSize:'13px'
          },
        }}
      />
    </Paper>
  );
}
