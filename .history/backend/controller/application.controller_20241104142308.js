//this is for applicants

export const applyJob=async(req,res)=>{
try{
const userId=req.id;
const jobId=req.params.id;
if(!jobId){
    retrun res.status(400).json({message:
}
}
catch(error)
{
    console.error(error);
}
}