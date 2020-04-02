var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
//
recognition.continuous = true; // fonctionne true que sous chrome
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.lang = "fr-FR"; // en-EN
//
recognition.start();
console.log('Ready to hear you.');

recognition.onresult = function(event) {
  //
  var last = event.results.length - 1;
  var sentence = event.results[last][0].transcript;
  var splitted = sentence.split(" ");
  //console.log(splitted);
  receive(splitted);
}
//
recognition.onspeechend = function() {

}
