import './index.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from '../../components/Cards/ProjectCard';

const ProjectPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding:'0px 50px' }}>
        <Grid container spacing={2} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
      
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard title='Fix form validation' status='In Progress' statusBackground='rgb(76, 175, 80)' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard title='New company logo' status='On Hold' statusBackground='rgb(255, 152, 0);' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard title='Upgrade to latest Maps API' status='Finished' statusBackground='rgb(76, 175, 80)' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard title='Refactor backend' status='On Hold' statusBackground='rgb(255, 152, 0);' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard srcImg='/src/assets/imgs/unsplash-1.jpg' title='Fix form validation' status='In Progress' statusBackground='#ff5722' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard srcImg='/src/assets/imgs/unsplash-2.jpg' title='New company logo' status='On Hold' statusBackground='rgb(255, 152, 0)' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard srcImg='/src/assets/imgs/unsplash-3.jpg' title='Upgrade to latest Maps API' status='Finished' statusBackground='rgb(76, 175, 80)' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <ProjectCard srcImg='/src/assets/imgs/unsplash-4.jpg' title='Refactor backend' status='On Hold' statusBackground='#e53935' />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectPage;
