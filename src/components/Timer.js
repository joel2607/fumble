import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

import React from 'react';
import { useState, useEffect } from 'react';

export function Timer() {
    var deadline = 60*25;
    const [seconds, setSeconds] = useState(deadline);
    const [started, setStarted] = useState(false);

    const passSecond = () => {
        if(seconds <= 0){
            setStarted(false);
            return;
        }
        if(!started) return;
        deadline = seconds - 1;
        setSeconds(deadline);
    }

    const startTimer = () => {
        if(seconds === 0) setSeconds(deadline);
        setStarted(!started);
    }

    const convertSeconds = (secs) => {
        var mins = parseInt(secs/60);
        if(mins < 10) mins = "0" + String(mins);
        
        var s = secs % 60;
        if(s < 10) s = "0" + String(s);

        return String(mins) + ":" + String(s)
    }

    const setTime = (t) => {
        deadline = t;
        setSeconds(deadline)
    }

    useEffect(() => {
        const interval = setInterval(() => passSecond(started), 1000);
    
        return () => clearInterval(interval);
    });

    
    return (
      <>
      <Container fixed maxWidth="sm" >
        <Paper elevation={0}>
        <Stack sx = {{
            p: 2,
            gap: 2,
        }}>

            <Container align = 'center'>
                
                <Stack 
                direction = "row" 
                spacing = {2} 
                justifyContent="center"
                alignItems="center">
                    
                        <Button variant="text" color='secondary' onClick={() => setTime(60*25)}>25 mins</Button>
                        <Button variant="text" color='secondary' onClick={() => setTime(60*15)}>15 mins</Button>
                        <Button variant="text" color='secondary' onClick={() => setTime(60*5)}>5 mins</Button>
                    
                </Stack>
            </Container>

            <Typography variant='h1' align = 'center' sx = {{fontWeight: 'bold'}}>{convertSeconds(seconds)}</Typography>

            <Container align = "center">
                <Button variant="contained" color='secondary' sx={{ height: 50, width: 200, boxShadow: 15, fontWeight: 'bold', fontSize: 20}} onClick={() => startTimer()}>{started?"STOP":"START"}</Button>
            </Container>
        </Stack>
        </Paper>


      </Container>
      </>
    )
  }