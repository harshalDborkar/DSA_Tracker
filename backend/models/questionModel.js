import mongoose from "mongoose";

const questionModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    platform:{
        type:String,
    },
    link:{
        type:String,
        required:true,
        unique:true
    },
    tags:{
        type:[String],
    },

},{timestamps:true});
export const Question = mongoose.model("Question", questionModel);