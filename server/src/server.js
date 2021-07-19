const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routes');

require('dotenv').config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());

function notFound(req, res, next) {
    const error = new Error('Not found');
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(express.static(__dirname + '/templates'));
app.use(express.json());
app.use(router);

app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 3333;
app.listen(port, function() {
    console.log('server running..');
});