// Create web server

// 1. Import Express
const express = require('express');
const app = express();
const port = 3000;

// 2. Import mongoose
const mongoose = require('mongoose');

// 3. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

// 4. Create a schema
const courseSchema = new mongoose.Schema({
    name: String,