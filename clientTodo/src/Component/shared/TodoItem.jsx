import { CheckCircle, Delete, Edit, RadioButtonUnchecked } from "@mui/icons-material"
import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material"

const TodoItem=({ task, updateTask, deleteTask })=>{
  const { id, value, completed } = task
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
      <ListItemIcon>
        <Checkbox
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle color="secondary" />}
          checked={completed}
          onChange={() => updateTask({ id, completed: !completed })}
        />
      </ListItemIcon>
      <ListItemText primary={value} sx={{ ml: 1, fontSize: "0.875rem" }} />
      <Tooltip title="Edit">
      <IconButton edge="end" onClick={() => deleteTask(id)} sx={{ color: "#f87171" }}>
        <Edit />
      </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
      <IconButton edge="end" onClick={() => deleteTask(id)} sx={{ color: "#f87171" }}>
        <Delete />
      </IconButton>
      </Tooltip>
    </ListItem>
    )
}

export default TodoItem