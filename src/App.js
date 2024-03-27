import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Timer } from './components/Timer';
// import { Main } from './components/Main';

import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';



export const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Stack sx = {{
            p: 2,
            gap: 2,
        }}>

        <Timer/>
        </Stack>
    </ThemeProvider>
  )
}



export default App;
