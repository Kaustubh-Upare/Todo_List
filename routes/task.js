const express=require('express');
const { getMyTasks, addNewTask, editTask, deleteTask } = require('../controller/taskHandler');
const route=express.Router();


route.get('/my',getMyTasks);

route.post('/new',addNewTask);

route.put('/update',editTask);

route.delete('/delete',deleteTask)

module.exports=route