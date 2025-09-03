const { default: mongoose } = require("mongoose");
const UserModel = require('../model/UserModel');

const getUsers = async () => {
    try{
        const response = await UserModel.find({});
        console.log(response);
        
        return response;
    }
    catch(err){
        return err;
        
    }
}

module.exports = {getUsers}