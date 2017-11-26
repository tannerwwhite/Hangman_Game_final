
var bands = ["grateful dead",
             "phish",
             "moe",
             "snarky puppy",
             "sound tribe sector nine",
             "joe russos almsost famous",
             "string cheese incident",
             "umphreys mcgee",
             "the motet",
             "john mayer"];

var wordContainer = "";
var letterArray = [];
var numBlanks = 0;
var blanksAndSuccessfullGuesses = [];
var wrongLettersGuessed = [];
var winCount = 0;
var lossCount = 0;
var guesses = 9;



function startGame() {
  bandsWord = bands[Math.floor(Math.random() * bands.length)];


  letterArray = bandsWord.split("");


  numBlanks = letterArray.length;


  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];


  for (var i = 0; i < numBlanks; i++) {

    if (bandsWord.charAt(i) === ' ')
    {
      blanksAndSuccesses[i] = "&nbsp;";
      console.log("tiles: " + blanksAndSuccesses);
    }
    else
    {
      blanksAndSuccesses.push("_");
    }
  }


  document.getElementById("current-bands").innerHTML = blanksAndSuccesses.join(" ");




  console.log(bandsWord);
  console.log(letterArray);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}


function checkLetters(letter) {

  var isLetterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
      if (bandsWord[i] == letter) {
          isLetterInWord = true;
      }
  }


  if(isLetterInWord) {
  for (var i = 0; i<numBlanks; i++) {
      if(bandsWord[i] == letter) {
          blanksAndSuccesses[i] = letter;
      }
  }
}

  else {
      wrongLetters.push(letter);
      guessesLeft--
  }


  console.log(blanksAndSuccesses);

}

  function roundComplete() {
      console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);


      document.getElementById("guess-remain").innerHTML = guessesLeft;
      document.getElementById("current-bands").innerHTML = blanksAndSuccesses.join(" ");
      document.getElementById("letters-guessed").innerHTML = wrongLetters.join(" ");


      if (letterArray.toString() == blanksAndSuccesses.toString()) {
          winCount++;
          alert("You love shitty music!");


          document.getElementById("winCounter").innerHTML = winCount;

          startGame();
      }

      else if (guessesLeft == 0) {
          lossCount++
          alert("You lose!");


          document.getElementById("lossCounter").innerHTML = lossCount;

          startGame();
      }

  }






startGame();


document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();


  console.log(letterGuessed);
}
