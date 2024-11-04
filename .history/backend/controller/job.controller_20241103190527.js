export  const postJob = async (req, res)=>
{
    try
    {
      const {  title, description,requirements,salary,location,jobType,experience,position,company}=req.body;
      const userId =1
    }
    catch(error)
    {
        console.log(error);
    }
}