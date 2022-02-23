'use strict';
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js')
const errorhandler = require('./error-handlers/500.js');
const  notFound = require('./error-handlers/404.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.get('/',(req,res)=>{
    res.status(200).send('Home page')
})
app.get('/person',validator,(req,res)=>{
    res.status(200).json({ name : req.query.name})
})



app.use(errorhandler);
app.use('*',notFound);

function start(port) {
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}

module.exports = {
    app: app,
    start: start
}


