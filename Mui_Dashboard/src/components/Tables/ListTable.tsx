import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Visibility, Download } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'; 
import GradeIcon from '@mui/icons-material/Grade';

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName: 'Customer',
    flex: 1,  
    // minWidth: 200,  // Minimum width to maintain usability
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={params.row.image}
          alt={params.row.firstName} 
          style={{ width: '40px', height: '40px', borderRadius: '5px', marginRight: '10px' }} 
        />
        <span>{params.row.firstName}</span>
      </div>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    minWidth: 120,
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
    field: 'age',
    headerName: 'Rating',
    type: 'number',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => console.log("Stock info for", params.row.id)}>
          <GradeIcon sx={{color:'#ffeb3b'}} />
        </IconButton>
        <span>{params.value}</span>
      </div>
    ),
  },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'Actions',
    headerName: 'Actions',
    flex: 1,
    minWidth: 130,
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
  { id: 1, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 2, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
  { id: 3, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 4, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
  { id: 5, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
  { id: 6, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 7, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
  { id: 8, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 9, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
  { id: 10, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 11, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 12, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
  { id: 13, image: '/src/assets/imgs/images.png', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Pending', paymentMethod: 'Visa' },
];



const paginationModel = { page: 0, pageSize: 18 };

export default function ListDataTable() {
  return (
    <Paper sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 20]}
          checkboxSelection
          sx={{
            border: 0,
            '& .MuiDataGrid-row': {
              padding: '40px 0', 
              fontSize:'13px'
            },
          }}
        />
      </div>
    </Paper>
  );
}
