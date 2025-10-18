import mongoose from "mongoose";

const sheetModel = new mongoose.Schema({
    sheetName:{
        type:String,
        required:true
    },
    sheetQuestions:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question" // name of the model being referenced
    }
    ]   
    
}, {timestamps:true});
export const Sheet = mongoose.model("Sheet", sheetModel);