let loadedText;
let words;
let wordsAnalysis = [];
//
function preload() {
  loadedText = loadStrings("assets/leshautsparleurs.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  words = loadedText[0].split(' ');
  //
  // let w1 = {
  //   word: "chat",
  //   qtt: 0,
  //   tellMe: function() {
  //     console.log("le mot "+this.word+" est apparu "+this.qtt+" fois");
  //   }
  // }
  // let w2 = {
  //   word: "Spassky",
  //   qtt: 0,
  //   tellMe: function() {
  //     console.log("le moertt "+this.word+" est apparu "+this.qtt+" fois");
  //   }
  // }
  // wordsAnalysis.push(new OneWord("chat"));
  // wordsAnalysis.push(new OneWord("Spassky"));
  // wordsAnalysis.push(new OneWord("dans"));
  //
  for (let i = 0; i < words.length; i++) {
    let wordToCheckFromText = words[i];
    //
    let wordExist = false;
    for (let j = 0; j < wordsAnalysis.length; j++) {
      let wordToAnalyse = wordsAnalysis[j];
      if (wordToCheckFromText == wordToAnalyse.word) {
        wordExist = true;
      }
    }
    //
    if(wordExist) {
      // RIEN
    } else {
      wordsAnalysis.push(new OneWord(wordToCheckFromText));
    }
    //
    for (let j = 0; j < wordsAnalysis.length; j++) {
      let wordToAnalyse = wordsAnalysis[j];
      if (wordToCheckFromText == wordToAnalyse.word) {
        wordToAnalyse.qtt++;
      }
    }
  }
  wordsAnalysis.sort(compare);
  //console.log(wordsAnalysis);
  //
}


function draw() {
  background(255, 0, 0);
  for (let j = 0; j < wordsAnalysis.length && j<200; j++) {
    let wordToAnalyse = wordsAnalysis[j];
    wordToAnalyse.showText();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function compare(a, b) {
  if (a.qtt < b.qtt) {
    return true;
  } else {
    return false;
  }
}








class OneWord {
  constructor(initialWord) {
    this.word = initialWord;
    this.qtt = 0;
    //
    this.x = random(0, width);
    this.y = random(0, height);
    //
    this.size = 10;
  }
  tellMe() {
    console.log("le mot " + this.word + " est apparu " + this.qtt + " fois");
  }
  showText() {
    textSize(this.size);
    text(this.word, this.x, this.y);
    //
    if(this.size<this.qtt) {
      this.size+=0.1;
    }
  }
}
