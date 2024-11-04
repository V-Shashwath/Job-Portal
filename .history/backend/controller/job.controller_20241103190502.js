export  const postJob = async (req, res)=>
{
    try
    {
      const {  title, description,requirements,salary,location,jobType,experience,position,company}=req/body;
    }
    catch(error)
    {
        console.log(error);
    }
}