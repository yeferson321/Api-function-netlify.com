const express = require('express');
const serverless = require('serverless-http');
const router = express.Router();

const app = express();


router.get('/', (req, res) => {

    const data = { 
        email: 'yeferson', 
        password: '234345' 
    }

    res.json(data);

});

app.use('/', router);

module.exports.handler = serverless(app)
