export const register =async(req,res)=>{
    try{
        const {fullname, email,phoneNumber,password,roles} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !roles)
        {
            
        }
    }
    catch(error)
    {

    }
}