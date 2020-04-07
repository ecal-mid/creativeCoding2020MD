const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
app.use(express.static('assets'));
//
app.get('/', function(req, res){
  res.sendFile("index.html");
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
