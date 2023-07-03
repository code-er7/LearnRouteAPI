import { User } from "../models/userD.js";


export const registerUser = async(req , res)=>{
    const{ name , email , password } = req.body ; 
   const users = await User.create({
    name ,
    email ,
    password 
   });
   res.json({
    success:true ,
    message:"Registered Succefully"
   });
};
export const getAllUsers =  async(req , res)=>{
    const users = await User.find({})
    res.json({
     success:true ,
     users 
    });
 };
export const getUserByID = async (req , res )=>{
    //here the id is coming in params
    const {id} = req.params;

    const user = await User.findById(id);
    res.json({
        success:true,
        user
    });
};
export const updateUserByID = async (req , res )=>{
    //here the id is coming in params
    const {id} = req.params;

    const user = await User.findById(id);
    res.json({
        success:true,
        message :"updated"
    });
};
export const deleteUserByID = async (req , res )=>{
    //here the id is coming in params
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({
        success:true,
        message:"deleted User Succesfully"
    });
};