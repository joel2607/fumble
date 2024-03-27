import {createTheme } from '@mui/material/styles';

export const focusTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#9e4847',
        contrastText: '#fffefe'
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#ac504c',
      },
      background: {
        default: '#ac504c',
        paper: '#b5635e',
      },
      text: {
        primary: '#fffefe',
        secondary: '#00000f',
        disabled: '#fffefe',
      },
    },
  });

export const breakTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#4d8389',
        },
        secondary: {
          main: '#ffffff',
          contrastText: '#4d8389',
        },
        background: {
          default: '#4d8389',
          paper: '#5e9195',
        },
        text: {
          primary: '#fffefe',
          secondary: '#debfbd',
          disabled: '#fffefe',
        },
      },
  });