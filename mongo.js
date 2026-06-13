const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/users")
.then(()=>{
    console.log("Database Connected");
})
.catch(()=>{
    console.log("Failed to Connect");
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection",newSchema)

module.exports=collection