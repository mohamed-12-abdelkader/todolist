import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Todo from './Todo';
import { useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { v4 as uuidv4 } from 'uuid';




export default function Todolist(){

const [inputValue, setInputValue] = useState('');
const [updateTodo, setUpdateTodo] = useState('');
const [todosType, setTodosType] = useState('all');
const [todos, setTodos] = useState([]);




function changeType(e) {
  setTodosType(e.target.value);
}




function modifyTask(todooId){
    const updettodos =todos.map((t)=>{
     if(t.id===todooId){
         return {...t, title:updateTodo}
     }else{
         return t;
     }
    })
    setUpdateTodo("")
    setTodos(updettodos)
    
 }


function deleteTask(todooId){
  setTodos(
        todos.filter(a =>
          a.id !==todooId
        ))
}



function handleToggleComplete(todoId){
   const updatedTodos=todos.map((t)=>{
    if(t.id === todoId){
t.isCompleted =!t.isCompleted
    }
    return t
   })
   setTodos (updatedTodos)
}


const filtered = todos.filter(todos => {
  return todos.isCompleted 
});

const filtered2 = todos.filter(todos => {
  return !todos.isCompleted 
});

let  Todos=todos

if(todosType==="completed"){
  Todos=filtered
}else if(todosType==="no-completed"){
  Todos=filtered2
}

let todojsx= Todos.map((t)=>{
    return<Todo key={t.id} todo={t} handleToggleComplete={handleToggleComplete} deleteTask={deleteTask} updateTodo={updateTodo} setUpdateTodo={setUpdateTodo} modifyTask={modifyTask} />
})
 


function handleAddTodo(){
  setTodos([
        ...todos,{id:uuidv4(),title:inputValue}
    ])
    setInputValue("")
}


return(
    <>
    <CssBaseline />
    <Container fixed maxWidth="md">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2" component="h2" >
        My tasks
        </Typography>
          <hr />
       
    <ToggleButtonGroup
   onChange={changeType}
   exclusive
   value={todosType}
   aria-label="text alignment"
 >
   <ToggleButton value="no-completed" >not accomplished</ToggleButton>
   <ToggleButton value="completed" >Accomplished</ToggleButton>
   <ToggleButton value="all" >All</ToggleButton>
  
 </ToggleButtonGroup>
      {todojsx}
      </CardContent>
    
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Grid container spacing={2}>
        
        <Grid  item xs={4}>
        <Button  sx={{width:"100%",height:"100%",textTransform:"capitalize"}} variant="contained" onClick={handleAddTodo } >
        <ReplyAllIcon/> <Typography variant='h6'>Addition</Typography>
      </Button>
        </Grid>

        <Grid  item xs={8}>
        <TextField sx={{width:"100%"}} id="outlined-basic"
        value={inputValue}
        onChange={e=> setInputValue(e.target.value)}
        label="addition task"
         variant="outlined" />
        </Grid>
      </Grid>
      </CardContent>
    </Card>
    </Container>
    </>
)


}  