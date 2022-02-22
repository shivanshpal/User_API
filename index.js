const express = require('express');
const path = require('path');
const port = 8000;

const db=require('./config/mongoose');
const User=require('./models/user');

var usersRouter = require('./routes/users');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', usersRouter);


app.listen(port, function (err) {
    if (err) {
        console.log("error is :", error)
    }
    console.log("server is running successsfully on port: ", port);
})

