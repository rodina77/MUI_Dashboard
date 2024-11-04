import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs(props:{page:string, title: string}) {
  return (
    <div role="presentation" onClick={handleClick} style={{ width:'100%', borderBottom:'1px solid gray' , paddingBottom:'20px' , marginBottom:'20px'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          {props.page}
        </Link>
        <Typography sx={{ color: 'text.primary' }}>{props.title}</Typography>
      </Breadcrumbs>
    </div>
  );
}
