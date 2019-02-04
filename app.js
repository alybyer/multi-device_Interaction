//main file
//Set up server
const express = require('express');  //constant(always use) can't change, set express to be a variable. Use 'let' if you want to change variables
const app = express();
const http = require("http");
const server = http.createServer(app);

const LISTEN_PORT = 8080; //default port. default port for https is 443

//use middleware
//these functions are acted upon the page before it is 'served'
app.use(express.static(__dirname + '/public')) // telling the server to assume the public folder where all html/js is found

//create a 'route' for accessing this page
app.get('/', function(req, res){
    res.sendFile(__dirname + 'public/index.html'); //send/serve this index/html file
});

//now start server
server.listen(LISTEN_PORT);

console.log('Listening to port' + LISTEN_PORT); //print to screen