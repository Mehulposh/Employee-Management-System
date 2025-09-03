const {getUsers,get_User_By_Id} = require('../service/UserService')

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
module.exports = {getAllUsers,getUserById}