import mongoose from "mongoose";
const companySchema=new mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
       
      },
      description:{
        type:String,
       
      },
      website:{
        type:String,
        required:true,
       
      },
     
      name:{
        type:String,
        required:true,
       
      },
    }
)