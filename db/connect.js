const mangose = require("mongoose")

const connectDB =(dbURL)=>{
    return mangose.connect(dbURL,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB 