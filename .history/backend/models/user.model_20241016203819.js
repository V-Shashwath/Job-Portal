import mongoose from "mongoose";
const jobSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        requirements:[{
            type:String,
            required:true
        }],
        :{
            type:String,
            required:true
        },

    }
)