import TaskForm from './TaskForm';
import Task from './Task';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
// import React from 'react';
import { useState, useEffect } from 'react';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);

    function addTask(name) {
        setTasks(prev => {
            return [...prev, {name:name, done:false}];
        })
    }


    function taskDone(taskIndex, newDone) {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[taskIndex].done = newDone;
            return newTasks;
        });
    }

    return (
      <>
      <Container fixed maxWidth="sm" >
        <Stack spacing={2}>
        <Divider variant='middle'></Divider>
        <Typography align = "center" sx = {{fontSize: 25}}>
        YOUR TODOS
        </Typography>
        <TaskForm onAdd={addTask}/>


        {tasks.map((task, index) => (
                <Task {...task} 
                onToggle={done => taskDone(index, done)} />
        ))}


        </Stack>

      </Container>
      </>
    )
  }