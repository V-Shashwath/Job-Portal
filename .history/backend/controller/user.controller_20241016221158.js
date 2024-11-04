export const register =async(req,res)=>{
    try{
        const {fullname, email,phoneNumber,password,roles} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !roles)
        {
            return res.status(400).json({message: "."});
        }
    }
    catch(error)
    {

    }
}