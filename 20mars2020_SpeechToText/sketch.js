let font;
let wordArray = [];
let semantic = ["neige", "blanc", "hiver"];
//
function preload() {
  font = loadFont("assets/EuclidFlex-Bold.otf");
}
//
function receive(splitted) {
  splitted.forEach(function(s) {
    //console.log("on itère sur s qui vaut: "+s);
    if(semantic.includes(s)) {
      wordArray.push(new Graphic(s));
    } else {
      wordArray.push(new Word(s));
    }
  });
}
//
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ortho();
  textFont(font);
  textSize(100);
  receive(["AAA", "BBB", "CCC"]);
}
function draw() {
  orbitControl();
  background(127);
  fill(255);
  wordArray.forEach(function(w) {
    w.draw();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
