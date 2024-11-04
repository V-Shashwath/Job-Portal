export  const postJob = async (req, res)=>
{
    try
    {
      const {  title, description,requirements,salary,location,jobType,experience,position,companyId}=req.body;
      const userId =req.id;

      if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId)
      {
        return req.status("something is missing")
      }
    }
    catch(error)
    {
        console.log(error);
    }
}