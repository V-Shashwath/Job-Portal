import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    fullname:
    {
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    fphoneN:
    {
        type:String,
        required:true,
    },

})