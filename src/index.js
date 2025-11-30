const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");


const {PORT}= require('./config/serverConfig')
const appRoutes = require('./Routes/index')

const serverSetupAndStart = async () => {
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    // app.use(
    // cors({
    //     origin: function (origin, callback) {
    //     const allowedOrigins = ['http://localhost:4200'];
    //     if (!origin || allowedOrigins.includes(origin)) {
    //         callback(null, true);
    //     } else {
    //         callback(new Error('Not allowed by CORS'));
    //     }
    //     },
    //     credentials: true,
    //     methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    //     allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token']
    // })
    // );


    app.use(cors({ origin: '*', credentials: true ,methods: 'GET,POST,PUT,DELETE,PATCH' }));

    
    
    app.use("/api", appRoutes)

    app.listen(PORT, async () => {
        console.log(` Backend server start at ${PORT}`)
    })

}

serverSetupAndStart()