
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";

export default function Task({ name, done, onToggle }) {

    return (
        <Container fixed maxWidth = "md">
            <Paper elevation={1} sx = {{ width: "100%"}}>
            <Typography>
            <Checkbox checked={done} color = "secondary" onClick={() => onToggle(!done)}></Checkbox>
            {name}
            </Typography>
            </Paper>
        </Container>
        
    );

} 