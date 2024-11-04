import {User} from "../models/user.model.js"
import bcrypt from 'bcryptjs';

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
        const hashedPassword=await bcrypt.hash(password,10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            roles
        })
    }
    catch(error)
    {

    }
}
export const login =async(req, res)=>
{
    try{
const {email,password,role} =req.body;

if(!email ||!password ||!role)
{
    return res.status(400).json({
        message: "Something is missing.",
        success:false
    });
};
const user=await User.findOne({email});
if(!user)
{
    return res.status(400).json({
        message:"message incorrect",
        success:false,
    })
}
}
catch(error){

}

}