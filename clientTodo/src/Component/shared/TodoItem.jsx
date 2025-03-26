import { CheckCircle, Delete, Edit, RadioButtonUnchecked } from "@mui/icons-material"
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material"
import { lazy, useState } from "react"
import { useChangeCompletionMutation, useDeleteTaskMutation } from "../../redux/api/api";

const LazyEditTaskDialog=lazy(()=>import('../Dialog/EditTaskDialog'));

const TodoItem=({ task, updateTask, deleteTask })=>{
  const {_id, title,completed } = task
  const [openDialogEdit,setOpenDialogEdit]=useState(false);

  const [changeCompletion]=useChangeCompletionMutation()
  const [deleteTasky]=useDeleteTaskMutation();
    const toggleCompletion=({completed})=>{
        console.log(completed);
        console.log(_id)
        changeCompletion({id:_id,completed:!completed})
    }

    const handleDelete=()=>{
      console.log("delt",_id)
      deleteTasky({id:_id})
    }

  const handleUpdate=()=>{
    console.log(_id)
    setOpenDialogEdit(true);
  }

    return(
    <ListItem
        sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        px: 2,
        // "&:hover": { backgroundColor: "rgb(112, 109, 109)",borderRadius:5 },
      }}
    >
      <ListItemIcon >
        <Checkbox
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle color="secondary" />}
          checked={completed}
          onChange={() => toggleCompletion({ _id, completed })}
        />
      </ListItemIcon>
      <ListItemText primary={title} sx={{ ml: 1, fontSize: "0.875rem" }} />
      <Tooltip title="Edit" >
      <IconButton edge="end" onClick={handleUpdate} sx={{ color: "#f87171" }}>
        <Edit />
      </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
      <IconButton edge="end" onClick={handleDelete} sx={{ color: "#f87171" }}>
        <Delete />
      </IconButton>
      </Tooltip>
      
    {openDialogEdit && <LazyEditTaskDialog open={openDialogEdit} 
    handleClose={()=>setOpenDialogEdit(false)} 
    editID={_id}
    />}
    </ListItem>

    )
}

export default TodoItem