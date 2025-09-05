const express = require('express');
const {getAllUsers,getUserById,createUser, login} = require('../controller/UserController')
const router = express.Router()

router.get('/all-users',getAllUsers);
router.get('/get-user-by-id/:id',getUserById);
router.post('/user-login',login)
router.post('/create-user',createUser)

module.exports = router