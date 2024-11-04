import Button from '@mui/material/Button';

export default function DisableElevation(props:{title: string}) {
  return (
    <Button variant="contained" disableElevation sx={{fontSize:'12px'}}>
      {props.title}
    </Button>
  );
}
