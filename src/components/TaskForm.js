import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';


export default function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <Container align = "center" >

            <Button variant="outlined" color = "secondary" sx = {{fontSize: 25}}>+</Button>


            <TextField variant="filled"
                value={taskName}
                color = "secondary"
                placeholder="Add New Task"
                sx = {{ml: 2, flexGrow: 1}}
                onChange={event => setTaskName(event.target.value)}>
                
            </TextField>


            
            </Container>

                
        </form>
        
    );

    function handleSubmit(event) {
        event.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
}