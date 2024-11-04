import{ Job} from " ../models/job.model.js";
//job posted by admin
export  const postJob = async (req, res)=>
{
    try
    {
      const {  title, description,requirements,salary,location,jobType,experience,position,companyId}=req.body;
      const userId =req.id;

      if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId)
      {
        return res.status(400).json({
            message: "something is missing", 
            success: false
        })
       
      };
      const job=await Job.create({
        title,
        description,
        requirements:requirements.split(","),
        salary:Number(salary),
        location,
        jobType,
        experienceLevel:experience,
        position,
       company: companyId,
       creted_by: userId
      });
      return res.status(201).json({
        message:"Job posted successfully",
        job,
        success:true
      });

    }
    catch(error)
    {
        console.log(error);
    }
}
//for students
export const getAllJobs=async(req,res)=>{
  try{
const keyword = req.query.keyword || "";
const query={
  $or:[
    {title: { $regex: keyword, $options: "i" }},
    {description: { $regex: keyword, $options: "i" }},
  ]
};

const jobs = await Job.find(query);
if(!jobs){
  return res.status(404).json({
    message:"Jobs not found",
    success:false
  })
};

return res.status(200).json({
  jobs,
  success:true
})
  }
  catch(error){
    console.log(error);
  }
}
//this is for student
export const getJobId=async(req, res) => {
  try{
  const jobId = req.params.id;
  const job=await Job.findById(jobId);
  if(!job)
  {
    return res.status(404).json({
      message:"Job not found",
      success:false
    })
  };
  return res.status(200).json({
    job,
    success:true
  });
  }
  catch(error){
    console.log(error);
  }
}

//track the number of job created by admin

export const getAdminJobs=async(req, res) => {
  try{
  const adminId = req.id;
  const jobs=await Job.find({created_by: adminId});
  if(!jobs){
    
  }
  {
    return res.status(404).json({
      message:"No job found",
      success:false
    })
  };
  return res.status(200).json({
    count,
    success:true
  });
  }
  catch(error){
    console.log(error);
  }
}