let input;
let textFinal;
let liste = [];
//
function preload() {
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  input = document.querySelector("#input");
  textFinal = document.querySelector("#textFinal");
  input.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
      let content = input.value;
      liste = content.split(" ");
    }
  });
}
function draw() {
  background(255);
  if(liste.length>0 && frameCount%20 == 0) {
    let splitted = liste.shift();
    getSyn(splitted, setSyn);
  }
  //
  //textFinal.innerHTML = content;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setSyn(result) {
  if(result.results.length>0) {
    let synonymes = result.results[0].syns.split("/");
    textFinal.innerHTML += synonymes[0]+" ";
  } else {
    textFinal.innerHTML += result.requested+" ";
  }
}
//










function getSyn(word, callback) {
  console.log(word);
  let url = "https://dev.fragment.in/dictionapi/?synonyme="+word;
  $.ajax({
    type: 'GET',
    url: url,
    data: '{"username": "creative", "password" : "coding"}',
    // dataType: "json",
    // username: "creative",  // Most SAP web services require credentials
    // password: "coding",
    success: function(data) {
      //console.log('success', data);
      callback(data);
    }, error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(ajaxOptions);
        console.log(thrownError);
      }
  });
}
