// importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser= require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();


const router = require('./routes/route');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/userlist');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to datebase mongodb @ 27017');
});

mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log('Error in database connection:'+err);
    }
});

//port number 
const port = 3000;

//adding middleware
app.use(cors());

//body- parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', router);

//testing server 
app.get('/',(req, res)=>{
    res.send('foolish ishq');

});

app.listen(port, ()=>{
    console.log('Server started at port: '+port);

});

