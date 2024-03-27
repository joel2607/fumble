import Paper from '@mui/material/Paper';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

export function Navbar(){
    return (
        <Container fixed maxWidth="md">
            <Paper elevation={1}>

                <Toolbar>


                    <AlarmOnIcon sx = {{

                        fontSize: 25
                    }}/>
                    <Typography sx = {{
                        fontWeight: 'bold',
                        fontSize: 20,
                        flexGrow: 1
                    }}>
                        Fumble
                    </Typography>

                
                    <Button variant="text" color='secondary' align = "right">
                    <SettingsIcon></SettingsIcon>
                        Settings
                        
                    </Button>
                </Toolbar>
            </Paper>
        </Container>
    );
}