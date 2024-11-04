import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function RecipeReviewCard({children}) {

  return (
    <Card sx={{ maxWidth: 845 , marginTop:'20px' , boxShadow:0 }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Total revenue"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {children}
        </Typography>
      </CardContent>
    </Card>
  );
}
