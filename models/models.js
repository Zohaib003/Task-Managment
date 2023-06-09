const mode = require("mongoose")

const tasksSchema = new mode.Schema({
    name:{
        type:String,
        required:[true,"name can't be null"],
        trim:true,
        maxlength:[20,"cant be greater than 20"],
    },
    completed :{
        type:Boolean,
        default:false,
    }
})


 
module.exports = mode.model("Tasks",tasksSchema)