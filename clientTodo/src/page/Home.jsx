import {Box, CircularProgress, Container, IconButton, Paper, TextField, Typography} from '@mui/material'
import {Add as AddIcon} from '@mui/icons-material'
import { useState } from 'react'
import TodoItem from '../Component/shared/TodoItem'
// 242424
const Home=()=>{
  const [newTask,setNewTask]=useState("")

  const tasksList=[
    {
      "id": 1,
      "value": "Buy groceries",
      "completed": true
    },
    {
      "id": 2,
      "value": "Walk the dog",
      "completed": true
    },
    {
      "id": 3,
      "value": "Finish work project",
      "completed": false
    },
    {
      "id": 4,
      "value": "Read a book",
      "completed": true
    },
    {
      "id": 5,
      "value": "Exercise",
      "completed": false
    },
    {
      "value": "Complete Redux",
      "completed": true,
      "id": 6
    },
    {
      "value": "df",
      "completed": false,
      "id": 7
    }
  ]


  const handleSubmit=()=>{
    console.log("handleSubmit")
  }

  const updateTask=()=>{
    console.log("update")
  }

  const deleteTask=()=>{
    console.log("delete")
  }


  return(
  <Box display='flex' justifyContent={'center'}
     height="100vh" bgcolor="#242424" width={"100vw"}
     p={4} >
     {/* <h1 style={{color:"white"}}>kas</h1> */}
      <Container maxWidth="sm">
        <Paper  elevation={3} sx={{ p: 3, bgcolor: "#2d3748", color: "#e2e8f0", borderRadius: 2 }}>
        <Box display="flex" alignItems="center" mb={2}>
            <AddIcon sx={{ fontSize: 32, color: "#4c51bf" }} />
            <Typography variant="h6" ml={2} fontWeight={600}>
              My Tasks
            </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" 
              border={1} borderColor="#4a5568" borderRadius={3} px={2}  mb={2}>
            <TextField
              variant="standard"
              fullWidth
              placeholder="Add a new task"
              InputProps={{ disableUnderline: true, style: { color: "#e2e8f0" } }}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              required
            />
            <IconButton type="submit" color="primary">
              <AddIcon />
            </IconButton>
        </Box>


        <Box sx={{ maxHeight: { xs: 300, sm: 400 }, overflowY: "auto" }}>
            {/* {isLoading ? (
              <Box display="flex" justifyContent="center"><CircularProgress color="inherit" /></Box>
            ) : isError ? (
              <Typography textAlign="center" color="error">{error?.message || "Something went wrong"}</Typography>
            ) : ( */}
              {
              tasksList.map((task) => (
                <TodoItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
              ))}
              {/* )) */}
            {/* )} */}
          </Box>
      

        </Paper>
      </Container>

  </Box>
    )
}

export default Home