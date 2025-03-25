import {Box, CircularProgress, Container, IconButton, Paper, TextField, Typography} from '@mui/material'
import {Add as AddIcon} from '@mui/icons-material'
import { useState } from 'react'
// 242424
const Home=()=>{
  const [newTask,setNewTask]=useState("")

  const handleSubmit=()=>{
    console.log("handleSubmit")
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

      

        </Paper>
      </Container>

  </Box>
    )
}

export default Home