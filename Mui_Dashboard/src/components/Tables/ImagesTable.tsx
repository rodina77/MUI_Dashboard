import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Visibility, Download } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'; 
import GradeIcon from '@mui/icons-material/Grade';

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName: 'Item Name',
    width: 350,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={params.row.image} alt={params.row.firstName} 
             style={{ width: '40px', height: '40px', borderRadius: '5px', marginRight: '10px' }} />
        <span>{params.row.firstName}</span>
      </div>
    ),
  },
  {
    field: 'age',
    headerName: 'Rating',
    type: 'number',
    width: 130,
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
    field: 'status',
    headerName: 'Category',
    description: 'This column has custom rendering based on status.',
    sortable: false,
    width: 190,
  },
  {
    field: 'paymentMethod',
    headerName: 'Rating',
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
  { id: 1, image: '/src/assets/imgs/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-1TB-Deep-Purple-MQ953LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.webp', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 2, image: '/src/assets/imgs/swappie-iphone-13-pro-sierra-blue-back.avif', firstName: 'Sony Pro Max', age: 42, status: 'Pending', paymentMethod: 'Cash' },
  { id: 3, image: '/src/assets/imgs/product-detail-1.png', firstName: 'Iphone 16 Pro', age: 45, status: 'Cancelled', paymentMethod: 'MasterCard' },
  { id: 1, image: '/src/assets/imgs/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-1TB-Deep-Purple-MQ953LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.webp', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 2, image: '/src/assets/imgs/swappie-iphone-13-pro-sierra-blue-back.avif', firstName: 'Sony Pro Max', age: 42, status: 'Pending', paymentMethod: 'Cash' },
  { id: 3, image: '/src/assets/imgs/product-detail-1.png', firstName: 'Iphone 16 Pro', age: 45, status: 'Cancelled', paymentMethod: 'MasterCard' },
  { id: 1, image: '/src/assets/imgs/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-1TB-Deep-Purple-MQ953LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.webp', firstName: 'iPhone 14 Pro Max', age: 35, status: 'Shipped', paymentMethod: 'Visa' },
  { id: 2, image: '/src/assets/imgs/swappie-iphone-13-pro-sierra-blue-back.avif', firstName: 'Sony Pro Max', age: 42, status: 'Pending', paymentMethod: 'Cash' },
  { id: 3, image: '/src/assets/imgs/product-detail-1.png', firstName: 'Iphone 16 Pro', age: 45, status: 'Cancelled', paymentMethod: 'MasterCard' },
];

const paginationModel = { page: 0, pageSize: 18 };

export default function ImgDataTable() {
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
            padding: '40px 0', 
            fontSize:'13px'
          },
        }}
      />
    </Paper>
  );
}
