
const Tasks = require("../models/models")

///========================== get all tasks from db

const getAllTasks = async (req,res)=>{
    
    try {
        const tasks = await Tasks.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json(error)
    }
    
}

// ============================ creatb task

const creatTasks = async (req,res)=>{
    
    try {
        const creattask = await Tasks.create(req.body)
        res.status(201).json({creattask})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

const updateTasks = async (req,res)=>{
   
    try {
        const updateTask = await Tasks.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true,runValidators:true})
        if (!updateTask){
                return res.status(400).json({mes:`dont exist thiss id ${req.params.id}`})
        }

        res.status(200).json({updateTask})
    } catch (error) {
        res.status(500).json({msg: error})
    }
   
}

// ========================= delete task
const deleteTasks = async (req,res)=>{
    
    try {
        const deleteTask = await Tasks.findOneAndDelete({_id:req.params.id})
        if (!deleteTask){
            return res.status(400).json({mes:`dont exist thiss id ${req.params.id}`})
        }
        res.status(200).json({deleteTask})
    } catch (error) {
        res.status(500).json({msg: error})
        
    }
    
}

// ============================= get single task
const getTask = async (req,res)=>{
    
    try {
        const task =  await Tasks.findOne({_id:req.params.id})
        if (!task){
            return res.status(400).json({mes:`dont exist thiss id ${req.params.id}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
        
    }  
    
}



module.exports = {
    getAllTasks,creatTasks,deleteTasks,getTask,updateTasks
}