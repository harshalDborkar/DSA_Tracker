import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
    solvedQuestions:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question" // name of the model being referenced
    }
    ]   
    
}, {timestamps:true});
export const User = mongoose.model("User", userModel);