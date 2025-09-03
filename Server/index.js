const express = require('express');
require('dotenv').config();
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');
const PORT = process.env.PORT

const server = express();

server.use(cors());

server.use(express.json());

server.use('/api/v1',UserRoutes)
server.listen(PORT, () => {
    console.log("THumbs up every time is good port listning is active on expressJS",PORT)
})