const express = require('express')
const mongodb = require('mongodb');

const PORT = 3000;
const HOST = '0.0.0.0' //Uma forma do docker entender que ele só precisa repassar a porta 3000

const connection = mongodb.createConnection({
    host: 'mydatabase',
    //host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mongo',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB database');
});

const app = express()

app.listen(PORT, HOST)