const {getUsers} = require('../service/UserService')

async function getAllUsers(req,res){
    try {
        const data = await getUsers();
        console.log('data',data);
        
         res.status(200).send(data);
    } catch (error) {
         res.status(400).json({message: 'Error fetching user data'})
    }
   
}

module.exports = {getAllUsers}