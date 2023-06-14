import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
//import Box from '@mui/material/Box';
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

let [inputvalue,setinputvalue]=useState("")
let [updettodo,setupdettodo]=useState()

let [todostype,settodostype]=useState("all")

let [todos,settodos]=useState([])



function changetype (e){
settodostype(e.target.value)
}



function handelupdetclick(todooId){
    const updettodos =todos.map((t)=>{
     if(t.id===todooId){
         return {...t, title: updettodo}
     }else{
         return t;
     }
    })
    setupdettodo("")
    settodos(updettodos)
    
 }


function handeldeletclick(todooId){
    settodos(
        todos.filter(a =>
          a.id !==todooId
        ))
}



function handelchick(todoId){
   const handelchick=todos.map((t)=>{
    if(t.id === todoId){
t.isCompleted =!t.isCompleted
    }
    return t
   })
   settodos (handelchick)
}


const filtered = todos.filter(todos => {
  return todos.isCompleted 
});

const filtered2 = todos.filter(todos => {
  return !todos.isCompleted 
});

//let  todosrendered=todos

if(todostype==="completed"){
  todos=filtered
}else if(todostype==="no-completed"){
  todos=filtered2
}

let todojsx=todos.map((t)=>{
    return<Todo key={t.id} todo={t} handelchick={handelchick} handeldeletclick={handeldeletclick} updettodo={updettodo} setupdettodo={setupdettodo} handelupdetclick={handelupdetclick} />
})
 



function handleAddclick(){
    settodos([
        ...todos,{id:uuidv4(),title:inputvalue}
    ])
    setinputvalue("")
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
   onChange={changetype}
   exclusive
   value={todostype}
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
        <Button  sx={{width:"100%",height:"100%",textTransform:"capitalize"}} variant="contained" onClick={handleAddclick } >
        <ReplyAllIcon/> <Typography variant='h6'>Addition</Typography>
      </Button>
        </Grid>
        
        <Grid  item xs={8}>
        <TextField sx={{width:"100%"}} id="outlined-basic"
        value={inputvalue}
        onChange={e=> setinputvalue(e.target.value)}
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