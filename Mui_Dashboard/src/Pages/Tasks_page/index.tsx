import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BasicBreadcrumbs from "../../components/Headers/PathHeader";
import TasksCard from "../../components/Cards/TasksCard";
import { Typography } from "@mui/material";
import DisableElevation from "../../components/Button/Button";

const Task_Page = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding:'30px' }}>
        <Grid container spacing={2}>
          <BasicBreadcrumbs  page={"Task page"} title={"Task"}/>

          <Grid
            container
            item
            xs={12} sm={12} lg={4}
            sx={{
              backgroundColor: 'white',
              padding: '20px',
              height: '100%',
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}
            direction={"column"}
          >
            <Typography >Backlog</Typography>
            <Typography variant="body2" sx={{padding:'10px 0px'}}>Nam pretium turpis et arcu. Duis arcu.</Typography>
            <TasksCard proColor={"#4caf50"} preColor={"orange"} iconColor={"gray"} title={"Improve site speed"} />
            <TasksCard proColor={"white"} preColor={"#2196f3"} iconColor={"white"} title={"Google Best Practice"} />
            <TasksCard proColor={"#4caf50"} preColor={"orange"} iconColor={"gray"} title={"Improve site speed"} />
            <TasksCard proColor={"white"} preColor={"orange"} iconColor={"white"} title={"Redesign your home page"} />
            <TasksCard proColor={"#4caf50"} preColor={"orange"} iconColor={"gray"} title={"Improve site speed"} />
            <DisableElevation title={"Add new Task +"} />
          </Grid>

          <Grid
            container
            item
            xs={12} sm={12} lg={4}
            sx={{
              backgroundColor: 'white',
              height: '100%',
              padding: '20px',
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}
            direction={"column"}
          >
            <Typography>In Progress</Typography>
            <Typography variant="body2" sx={{padding:'10px 0px'}}>Curabitur ligula sapien, tincidunt non.</Typography>
            <TasksCard proColor={"#4caf50"} preColor={"orange"} iconColor={"gray"} title={"Improve site speed"} />
            <TasksCard proColor={"white"} preColor={"2196f3"} iconColor={"white"} title={"Google Best Practice"} />
            <DisableElevation title={"Add new Task +"} />
          </Grid>

          <Grid
            container
            item
            xs={12} sm={12} lg={4}
            sx={{
              backgroundColor: 'white',
              height: '100%',
              padding: '20px',
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}
            direction={"column"}
          >
            <Typography>Completed</Typography>
            <Typography variant="body2" sx={{padding:'10px 0px'}}>Aenean posuere, tortor sed cursus feugiat.</Typography>
            <TasksCard proColor={"white"} preColor={"orange"} iconColor={"white"} title={"Google Best Practice"} />
            <TasksCard proColor={"#4caf50"} preColor={"orange"} iconColor={"gray"} title={"Improve site speed"} />
            <TasksCard proColor={"white"} preColor={"#4caf50"} iconColor={"white"} title={"Redesign your home page"} />
            <DisableElevation title={"Add new Task +"} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Task_Page;