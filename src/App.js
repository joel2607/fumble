import { ThemeProvider} from '@mui/material/styles';
import { Timer } from './components/Timer';
// import { Main } from './components/Main';

import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { Navbar } from './components/Navbar';
import { focusTheme, breakTheme } from './themes';

import ToDoList from './components/ToDoList';

import React from 'react';
import { useState } from 'react';


function App() {

  const [isBreak, setBreak] = useState(false);
  return (
    <ThemeProvider theme={isBreak?focusTheme:breakTheme}>
      <CssBaseline/>
        <Stack sx = {{
            p: 2,
            gap: 2,
            
        }}>
          <Navbar/>
          <Timer setBreak = {setBreak}></Timer>
          <ToDoList/>
        </Stack>
    </ThemeProvider>
  )
}



export default App;
