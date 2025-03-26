const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    completed: {
        type: Boolean,
        default: false,
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
      },
},{timestamps:true})

module.exports=mongoose.model('Task',taskSchema);