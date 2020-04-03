let key;
function preload() {
  key = loadStrings("assets/key.txt");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  console.log(key[0]);
  canvas.drop(ocrCall);
}
function draw() {
  background(255);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function ocrCall(image) {
  getDataFromImage(image, key, getResult);
}
function getResult(data) {
  console.log(data);
}
