let key;
let canvas;
let imgToSend;
//
function preload() {
  key = loadStrings("assets/key.txt");
}
function setup() {
  console.log(key[0]);
  //
  canvas = createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  imgToSend = createGraphics(640, 480);
}
function draw() {
  background(255);
  imgToSend.image(capture, 0, 0, imgToSend.width, imgToSend.height);
  image(imgToSend, 0, 0, imgToSend.width, imgToSend.height);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
  console.log("sss");
  getDataFromCamera(imgToSend, key, getResult);
}
function getResult(data) {
  console.log(data);
}
