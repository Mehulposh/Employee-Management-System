const { default: mongoose } = require("mongoose");
const UserModel = require('../model/UserModel');

const getUsers = async () => {
    try{
        const response = await UserModel.find({});
       
        return response;
    }
    catch(err){
        return err;
        
    }
}


const get_User_By_Id = async (id) => {
    try {
        const response = await UserModel.findById(id);
        
        return response
    } catch (err) {
        return err
    }
}


const get_User_By_Name = async (name) => {
    try {
        const response = await UserModel.findOne({name});
        
        return response
    } catch (err) {
        return err
    }
}

const create_User = async (name,email,password) => {
        // Logic to create a user
        const UserObject = UserModel({name,email,password});
        
            try { 
                const response = await UserObject.save();
                console.log(response);
                
                return response
            } catch (error) {
                return error
            }

}


const user_login = async (email) => {
    try {
        const response = await UserModel.findOne({email});
        return response
    } catch (error) {
        return error
    }
}
module.exports = {getUsers,get_User_By_Id,get_User_By_Name,create_User,user_login}