const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system")
const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.set('views',  'views');

app.use(express.json());  // Parses JSON payloads
app.use(express.urlencoded({ extended: true }));  // Parses URL-encoded payloads

// for user routes

const userRoutes = require('./routes/userRoutes')
app.use('/' ,userRoutes)

app.listen(3001, function(){
    console.log('Server is running')
}) 