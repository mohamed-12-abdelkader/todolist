import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton    } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
//import Typography from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

export default function Todo({todo,handelchick,handeldeletclick,updettodo,setupdettodo,handelupdetclick}){
    let [showdlete,setshowdelet]=useState(false)
    let [showupdet,setshwoupdet]=useState(false)


function handelupdet (){
    handelupdetclick(todo.id)
    setshwoupdet(false)
    
}

function handelchickClick(){
    handelchick(todo.id)
}
function handelDelet(){
    handeldeletclick(todo.id)
}    

function handelShowclick(){
setshowdelet(true)
}
function handelShoUpdetclick(){
setshwoupdet(true)
}
function handelclose (){
setshowdelet(false)
}

function handelupdetclose (){
    setshwoupdet(false)
}




    return(
        <>


        <Dialog
       onClose={handelclose}
        open={showdlete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete the task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handelDelet} >Yes, delete</Button>
          <Button onClick={handelclose} autoFocus>
          cancel
          </Button>
        </DialogActions>
      </Dialog>





  
      <Dialog open={showupdet} onClose={handelupdetclose}>
        <DialogTitle>Modify the task</DialogTitle>
        <DialogContent>
          <DialogContentText>
       
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Modify the task"
         value={updettodo}
         onChange={e=>setupdettodo(e.target.value)}
           
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handelupdetclose}>Cancel</Button>
          <Button onClick={handelupdet } >Edit</Button>
        </DialogActions>
      </Dialog>

        <Card sx={{ minWidth: 275,backgroundColor:"#1b3358",marginTop:"20px",}}>
        <CardContent >
  
        <Grid style={{margin:"auto",color:"white" ,display:"flex", textAlign:"center"}} container spacing={2}>
    
        <Grid  item xs={6} md={4}>
        <Stack  direction="row" spacing={1}>
      <IconButton onClick={ handelShowclick}  style={{color:"#b51a2b",backgroundColor:"white",border:"solid 3px #b51a2b"}} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={handelShoUpdetclick}  style={{color:"#68A8CF",backgroundColor:"white",border:"solid 3px #68A8CF"}} aria-label="delete">
        <EditIcon />
      </IconButton>
      
      <IconButton onClick={ handelchickClick} style={{color:todo.isCompleted?"white":"green",backgroundColor:todo.isCompleted?"green": "white",border:"solid 3px green"}} color="secondary" aria-label="add an alarm">
        <CheckIcon />
      </IconButton>
       
    </Stack>
        </Grid>
        <Grid style={{textAlign:"center"}} item xs={6} md={8}> <Typography variant='h5' sx={{textAlign:"right",marginRight:"15px" , textDecoration:todo.isCompleted ? "line-through" :"none",textDecorationColor:"red",textDecorationStyle:"wavy"}}>{todo.title}</Typography>
      
        </Grid>
      </Grid>
        
      </CardContent>
      </Card>
      </>
    )
}



//<Typography variant='h5' sx={{textAlign:"right",marginRight:"15px"}}>{todo.title}</Typography>