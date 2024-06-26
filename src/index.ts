import { MongoClient } from "mongodb";

const express = require('express');
const body = require('body-parser');

async function start() {
    try {

        const app = express();

        const mongo = await MongoClient.connect('mongodb://localhost:27017/api_typescript');

        await mongo.connect();

        app.db = mongo.db();

        // body parser

        app.use(body.json({
            limit: '500kb'
        }));

        // Routes

        app.use('/customers', require('./routes/customers'));

        // Start server

        app.listen(3000, ()=> {
            console.log('Server listening on port 3000');
        });

    } catch (error) {
        console.log(error);
    }


}

start();