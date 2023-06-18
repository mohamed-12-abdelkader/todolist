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
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

export default function Todo({
todo,
handleToggleComplete,
deleteTask,
updateTodo,
setUpdateTodo,
modifyTask,
}) {
const [showDelete, setShowDelete] = useState(false);
const [showUpdate, setShowUpdate] = useState(false);

const modifyTheTask = () => {
modifyTask(todo.id);
setShowUpdate(false);
};

const handleToggleCompleted = () => {
handleToggleComplete(todo.id);
};

const handleDelete = () => {
deleteTask(todo.id);
};

const handleShowClick = () => {
setShowDelete(true);
};

const handleShowUpdateClick = () => {
setShowUpdate(true);
};

const closeDialogDelete = () => {
setShowDelete(false);
};

const closeDialogEdit = () => {
setShowUpdate(false);
};

return (
<>
<Dialog onClose={closeDialogDelete} open={showDelete}>
<DialogTitle>{"Do you want to delete the task?"}</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description"></DialogContentText>
</DialogContent>
<DialogActions>
<Button onClick={handleDelete}>Yes, delete</Button>
<Button onClick={closeDialogDelete} autoFocus>
Cancel
</Button>
</DialogActions>
</Dialog>
<Dialog open={showUpdate} onClose={closeDialogEdit}>
    <DialogTitle>Modify the task</DialogTitle>
    <DialogContent>
      <DialogContentText></DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Modify the task"
        value={updateTodo}
        onChange={(e) => setUpdateTodo(e.target.value)}
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={closeDialogEdit}>Cancel</Button>
      <Button onClick={modifyTheTask}>Edit</Button>
    </DialogActions>
  </Dialog>

  <Card
    sx={{
      minWidth: 275,
      backgroundColor: "#1b3358",
      marginTop: "20px",
    }}
  >
    <CardContent>
      <Grid
        style={{ margin: "auto", color: "white", display: "flex", textAlign: "center" }}
        container
        spacing={2}
      >
        <Grid item xs={6} md={4}>
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={handleShowClick}
              style={{
                color: "#b51a2b",
                backgroundColor: "white",
                border: "solid 3px #b51a2b",
              }}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={handleShowUpdateClick}
              style={{
                color: "#68A8CF",
                backgroundColor: "white",
                border: "solid 3px #68A8CF",
              }}
              aria-label="delete"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={handleToggleCompleted}
              style={{
                color: todo.isCompleted ? "white" : "green",
                backgroundColor: todo.isCompleted ? "green" : "white",
                border: "solid 3px green",
              }}
              color="secondary"
              aria-label="add an alarm"
            >
              <CheckIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid style={{ textAlign: "center" }} item xs={6} md={8}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "right",
              marginRight: "15px",
              textDecoration: todo.isCompleted ? "line-through" : "none",
              textDecorationColor: "red",
              textDecorationStyle: "wavy",
            }}
          >
            {todo.title}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</>
);
}