const express = require('express');
const db = require('./db');
const router = express.Router();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use('user', User);
app.use('admin', Admin);
const app = express();
app.use(express.json());

app.listen(`${PORT}`, ()=>{
    console.log('Server is running on port 3000');
});

