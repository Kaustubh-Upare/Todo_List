const {tryCatcher}=require('../utility/errorHandler.js')
const Task=require('../models/task.js')

const getMyTasks=tryCatcher(async(req,res,next)=>{
    const myTask=await Task.find({});

    res.status(200).json({success:'true',msg:myTask});
})

const addNewTask=tryCatcher(async(req,res,next)=>{
    const {title,priority}=req.body;

    await Task.create({
        title,
        priority
    })
    await Task.save();

    res.status(201).json({success:true,msg:"Task Added Succesfully"})
})

const editTask=tryCatcher(async(req,res,next)=>{
    const {taskId,title,completed,priority}=req.body;

    const t=await Task.findByIdAndUpdate(taskId,{
        title,completed,priority
    })
    res.status(200).json({ message: 'Task updated successfully',updated:t});
})

const deleteTask=tryCatcher(async(req,res,next)=>{
    const {taskId}=req.body;
    await Task.findByIdAndDelete(taskId);
    res.status(201).json({msg:"Succesfully Deleted The Task",success:true})
})

module.exports={addNewTask,editTask,getMyTasks,deleteTask}