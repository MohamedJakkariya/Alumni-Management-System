// Requirement modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongodb');

// import express function 
const app = express();

// use modules
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));

// Create server listen port: 4000
app.listen(progress.env.PORT || 4000, () => {
 console.log("Server running on port : 4000");
})