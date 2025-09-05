const {getUsers,get_User_By_Id,create_User, user_login} = require('../service/UserService')

async function getAllUsers(req,res){
    try {
        const data = await getUsers();
        
        
         res.status(200).send(data);
    } catch (error) {
         res.status(400).json({message: 'Error fetching user data'})
    }
   
}


async function getUserById(req,res){
    const params = req.params;
    const id = params.id
    
    
    try {
        const data = await get_User_By_Id(id)
        res.status(200).send(data);
    } catch (error) {
        res.status(400).json({message: 'Error fetching user data'})
    }
}



async function createUser(req,res) {
    const body = req.body;
        
    const {name,email,password} = body;

    try {
        const response = await create_User(name,email,password);
        console.log(response);
        
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({message: 'Error Creating User'})
    }
    
}


async function login(req,res) {
    const body = req.body;
    const {email} = body;
    try {
        const response = await user_login(email)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message: 'error finding user'})
    }
}
module.exports = {getAllUsers,getUserById,createUser,login}