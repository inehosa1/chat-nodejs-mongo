const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const router = require('./config/routes');

db('mongodb://192.168.1.14:27017/test');

var app = express();

app.use(bodyParser.json());

router(app)

app.use('/app', express.static('public'));

app.listen(3000);
