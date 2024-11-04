//this is for applicants

import { Application } from "../models/application.model.js";
import {Job} from "../models/job.model.js";

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
    });
}
//check if the job exist
const job=await Job.findById(jobId);
if(!job)
{
return res.status(404).json({
message:"Job not found",
success:false
})
}
//create a new aplpication
const newApplication=await Application.create({
    job:jobId,
    applicant:userId,
});
 job.applications.push(newApplication._id);
 await job.save();
 return res.status(201).json({
message:"Job applied successfully",
success:true
 })
}catch(error)
{
    console.error(error);
}
};
export const getAppliedJobs=async(req, res) => {
try{
const userid=req.id;
const application=await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
    path:'job',
  options:{sort:{createdAt:-1}},
  populate:{
   path: 'company',
   options:{sort:{createdAt:-1}},      
}    //to extract tottal details of company from job.model.js  i.e 
//   company: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Company',
//     required: true
// },
});
if(!application)
{
    return res.status(404).json({
        message:"No application found",
        success: false
    })
};
return res.status(200).json({
application,
success:true
})
}catch(error) {
console.error(error);
}
}
//admin checks number of applicants applied ffpr this job
export const getApplicants =async(req,res) => {
try{
const jobId=req.params.id;
const job=await Job.findById(jobId).populate({
    path:'applications',
    options:{sort:{createdAt:-1}},
    populate:{
        path:'applicant'  //nested path to extract complete details of applicants only
    }

});
if(!job)
{
    return res.status(404).json({
        message: 'Job not found',
        success:false
    })

};
return res.status(200).json({
    job,
    success:true
});
}
catch(error) {
console.log(error);
}
}
//to know rejected or selected
export const updateStatus=async (req,res) =>
{
    try{
const {status} =req.body;
const applicationId =req.params.id;
if(!status)
{
    return res.status(400).json({
        message: 'status is required',
        success:false
    }) 
};
//find the aapplication by applicant id
const application = await Application.findOne({_id:applicationId});
if(!a)
    }
    catch(error)
    {
        console.log(error);
    }
}