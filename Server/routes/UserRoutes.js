const express = require('express');
const {getAllUsers,getUserById,createUser} = require('../controller/UserController')
const router = express.Router()

router.get('/all-users',getAllUsers);
router.get('/get-user-by-id/:id',getUserById);
router.post('/create-user',createUser)

module.exports = router