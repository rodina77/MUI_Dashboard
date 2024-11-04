import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DisableElevation from '../../Button/Button';


export default function FormInputs() {
  const title:string="Save Changes"
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
      noValidate
      autoComplete="off"
    >
      <div style={{backgroundColor:'white' , padding:'30px' , boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <p style={{fontSize:'20px'}}>Private info</p>
        <div style={{display:'flex'}}>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue="lucy"
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue="lavender"
        />
        </div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="lucylavender@gmail.com"
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          placeholder='Address'
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Apartment"
          placeholder='Apartment'
          defaultValue=""
        />
        <div style={{display:'flex'}}>
        <TextField
          required
          id="outlined-required"
          label="City"
          placeholder='City'
          defaultValue=""
        />
            <TextField
          required
          id="outlined-required"
          label="State"
          placeholder='State'
          defaultValue=""
        />
            <TextField
          required
          id="outlined-required"
          label="Zip"
          placeholder='Zip'
          defaultValue=""
        />

        </div>
        <DisableElevation title={title}/>
    
      </div>
    </Box>
  );
}
