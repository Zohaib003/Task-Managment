const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
require('dotenv').config();
const connectDB = require("./db/connect")
const handleError = require("./middleware/route_error")
const errorHandlerMiddleware = require('./middleware/error-handler');

// midleware
app.use(express.static("./public"))
app.use(express.json())
app.use("/api/v1/tasks",tasks)
app.use(handleError)
app.use(errorHandlerMiddleware)


// routes


const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,console.log("listing on port 3000"))
    }catch (error){
        console.log(error);
    }
}

start()