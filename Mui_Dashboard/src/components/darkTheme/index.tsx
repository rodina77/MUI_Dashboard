import { extendTheme } from '@mui/material/styles';

// Define the blue theme
export const blueTheme = extendTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1976d2',
          color: '#ffffff',
        },
      },
    },
    MuiListSubheader: { // For the header titles
      styleOverrides: {
        root: {
          width:'70%',
          backgroundColor: '#1976d2', // Primary color
          color: '#ffffff', // White text
        },
      },
    },
  },
});


// Define the green theme
export const greenTheme = extendTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgb(46, 125, 50)',
          color: '#ffffff',
        },
      },
    },
    MuiListSubheader: { // For the header titles
      styleOverrides: {
        root: {
          width:'70%',
          backgroundColor: 'rgb(46, 125, 50)', // Primary color
          color: '#ffffff', // White text
        },
      },
    },
  },
});

// Define the dark theme
export const darkTheme = extendTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgb(35, 48, 68)',
          color: '#ffffff',
        },
      },
    },
    MuiListSubheader: { // For the header titles
      styleOverrides: {
        root: {
          width:'70%',
          backgroundColor: 'rgb(35, 48, 68)', // Primary color
          color: '#ffffff', // White text
        },
      },
    },
  },
});