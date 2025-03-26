const express = require('express');
const cors=require('cors');
const taskRoute=require('./routes/task.js');
const { ErrorMiddleware } = require('./utility/errorHandler');


connectDB("mongodb://localhost:27017/TodoList");
const app=express();

app.use(cors({
    origin:"http://localhost:5173"
    ,credentials:true,
    methods:['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
    })
);

app.use('/task',taskRoute);
app.use(ErrorMiddleware)


app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})