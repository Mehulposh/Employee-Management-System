const express = require('express');
require('dotenv').config();
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');
const { default: mongoose } = require('mongoose');

//startinf port 
const PORT = process.env.PORT

//server created
const server = express();

server.use(cors());

//universal middleware
server.use(express.json());

server.use('/api/v1/user',UserRoutes)


const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
// database connection 
mongoose.connect(`${dbHost}:${dbPort}/${dbName}`)
.then(() => {
    console.log("thumbs up DB IS CONNECTED")
})


server.listen(PORT, () => {
    console.log("THumbs up every time is good port listning is active on expressJS",PORT)
})