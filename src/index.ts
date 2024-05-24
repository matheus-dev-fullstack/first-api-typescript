import { MongoClient } from "mongodb";

const express = require('express');
const body = require('body-parser');

async function start() {
    try {

        const app = express();

        const mongo = await MongoClient.connect('mongodb://localhost:27017/api_typescript');

        await mongo.connect();

        app.db = 

    } catch (error) {
        console.log(error);
    }


}

start();