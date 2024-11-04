import{ Job} from " ../models/job.model.js";
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
        requirements:requirements,
        salary,
        location,
        jobType,
        experience,
        position,
        companyId,
        userId
      })
    }
    catch(error)
    {
        console.log(error);
    }
}