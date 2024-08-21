
const User = require('../models/userModel.js');

exports.home = (req,res) => {
    res.send('this is home page ....');
}

exports.createUser =  async(req, res) => {
    try{
       const {name, email} = req.body 
       if(!name || !email){
        throw new Error("Name and email are Required");
       }
       const user = await User.create({
        name,
        email,
        password,
        
       })

       res.status(201).json({
        success: true,
        message: "User created Successfully",
        user
       }) 
    
    }catch(error){
        console.log("ERROR : ",error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// get all user data

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log("ERROR : ",error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// edit user 
exports.editUser = async (req, res) =>{
    try {
        await User.findByIdAndUpdate(req.param.id,req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        console.log("ERROR : ",error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// delete single user data

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.param.id 
        await User.findByIdAndDelete(userId)
    } catch (error) {
        res.status(200).json({
            success: false,
            message: error.message
        });
    }
}