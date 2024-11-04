//this is for applicants

import { application } from "express";

export const applyJob=async(req,res)=>{
try{
const userId=req.id;
const jobId=req.params.id;
if(!jobId){
    return res.status(400).json({
        message:"Job id is required",
        success:false
    })
};
//check if the user has already applied for the job
const existingApplication=await pplication
}
catch(error)
{
    console.error(error);
}
}