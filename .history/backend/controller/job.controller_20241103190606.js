export  const postJob = async (req, res)=>
{
    try
    {
      const {  title, description,requirements,salary,location,jobType,experience,position,company}=req.body;
      const userId =req.id;

      if(!title || !description || !requirements || !salary || !location || !jobT)
    }
    catch(error)
    {
        console.log(error);
    }
}