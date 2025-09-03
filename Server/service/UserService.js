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
module.exports = {getUsers,get_User_By_Id}