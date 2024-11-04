//this is for applicants

import { Application } from "../models/application.model";
import {Job}

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
const existingApplication=await Application.findOne({job:jobId,applicant:userId}); //if there is more application by same applicant

if(existingApplication)
{
    return res.status(400).json({
    message:"Application have been already applied by you",
    success:false
    })
}
//check if the jon exist
const job=await JOb
if(!job)
{

}
}catch(error)
{
    console.error(error);
}
}