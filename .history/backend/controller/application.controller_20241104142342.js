//this is for applicants

export const applyJob=async(req,res)=>{
try{
const userId=req.id;
const jobId=req.params.id;
if(!jobId){
    retrurn res.status(400).json({message:"Job id is required"
        success:false
    });
}
}
catch(error)
{
    console.error(error);
}
}