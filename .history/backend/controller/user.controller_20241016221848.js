import {User} from "../models/user.model.js"
export const register =async(req,res)=>{
    try{
        const {fullname, email,phoneNumber,password,roles} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !roles)
        {
            return res.status(400).json({
                message: "Something is missing.",
                success:false
            });
        };
        const user=await User.findOne({email});
        if(user)
        {
            return res.status(400).json({
                messgae:'user already exist with this mail',
                success:false,
            })
        }
        const hashedPassword=
    }
    catch(error)
    {

    }
}