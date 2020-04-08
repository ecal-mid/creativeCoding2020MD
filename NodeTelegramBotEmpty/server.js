const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
// WITH NODE
// Don't forget to npm install before use (install packages)
// To run in terminal: node server.js
//
// WITH BOTFATHER
// Don't forget to disable privacy (to add bot in group for ex.)
// Don't forget to create a token.txt file with your key inside
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
// SOCKET IO
io.on('connection', function(socket) {
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
// SETUP BOT
let setupBot = function(t) {
  this.token = t.trim();
  console.log(t);
  this.bot = new TelegramBot(this.token, {polling: true});
  //
  this.bot.on('message', function(msg) {
    console.log(msg.text);
    io.emit("telegram", msg);
  });
}
// LOAD TOKEN
try {
    var data = fs.readFileSync('token.txt', 'utf8');
    t = data.toString();
    setupBot(t);
} catch(e) {
    console.log('Error:', e.stack);
}
