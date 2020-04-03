function preload() {
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  getSyn("bonjour", setSyn);
}
function draw() {
  background(255);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setSyn(result) {
  console.log(result);
}
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
      console.log('success', data);
    }, error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(ajaxOptions);
        console.log(thrownError);
      }
  });
}
