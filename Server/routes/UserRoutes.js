const express = require('express');
const {getAllUsers} = require('../controller/UserController')
const router = express.Router()

router.get('/all-users',getAllUsers);
// router.get('/get-user-by-id/:id',);
// router.post('/create-user',)

module.exports = router