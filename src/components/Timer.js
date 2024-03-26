import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';

export function Timer() {
    return (
      <>
      <Container fixed maxWidth="sm" >
        <Paper sx = {{}}>
        <Stack>

            <Typography variant='h1' align = 'center' sx = {{fontWeight: 'bold'}} gutterbottom>22:35</Typography>
                <Container align = "center">
                    <Button variant="contained" color='secondary'>START</Button>
                </Container>
        </Stack>
        </Paper>


      </Container>
      </>
    )
  }