function preload() {
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//
let socket = io();
socket.on('telegram', function(msg){
  let t = msg.text.toLowerCase();
  console.log(t);
});
