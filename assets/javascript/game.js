// Array of possible words for the hangman game
var bands = ["grateful dead",
             "phish",
             "beauty and the beast",
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


// Funtions - Resuable bloicks of code when called upon if needed
// ===================================================================================
// Make sure i selected a word
function startGame() {
  bandsWord = bands[Math.floor(Math.random() * bands.length)];

  // Need to break this word apart. Allow me to have an array of individual letters.
  letterArray = bandsWord.split("");

  // Need to get Number of blanks required for this word.
  numBlanks = letterArray.length;

  // Reset - Need to reset a few key Variables becasue the ones at the top only run for the first round.
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  // Populate blanks and success with right number of blanks.
  for (var i = 0; i < numBlanks; i++) {
          // Create a space for any spaces between words
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

  // Change HTML to reflect round conditions
  // Use the .join to get rid of commas between each letter in the HTML
  document.getElementById("current-bands").innerHTML = blanksAndSuccesses.join(" ");



  // Always be Saving / Testing / Debugging
  console.log(bandsWord);
  console.log(letterArray);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}

// Compare letter that we type to a letter in the game - REMEMBER because you passed in and called the function letter that you have to run that down in Register Keyclick Section
function checkLetters(letter) {
  // check if letter exist anywhere in the word
  var isLetterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
      if (bandsWord[i] == letter) {
          isLetterInWord = true;
      }
  }

  // Check where in word the letter exists, then popluate out blanksAndSuccesses array.
  if(isLetterInWord) {
  for (var i = 0; i<numBlanks; i++) {
      if(bandsWord[i] == letter) {
          blanksAndSuccesses[i] = letter;
      }
  }
}
  // Letter wasnt found
  else {
      wrongLetters.push(letter);
      guessesLeft--
  }

  // Always be Saving / Testing / Debugging
  console.log(blanksAndSuccesses);

}
  // Runs after each round. Reduces guess increase wins..
  function roundComplete() {
      console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

      // Update the HTML to reflect the most recent count stats
      document.getElementById("guess-remain").innerHTML = guessesLeft;
      document.getElementById("current-bands").innerHTML = blanksAndSuccesses.join(" ");
      document.getElementById("letters-guessed").innerHTML = wrongLetters.join(" ");

      // Check if user won
      // If all letters in the blanks and Successes match then update winCount
      if (letterArray.toString() == blanksAndSuccesses.toString()) {
          winCount++;
          alert("You love shitty music!");

          // Update the win counter in the HTML
          document.getElementById("winCounter").innerHTML = winCount;

          startGame();
      }
      // Check if user lost
      else if (guessesLeft == 0) {
          lossCount++
          alert("You lost!");

          // Update the HTML
          document.getElementById("lossCounter").innerHTML = lossCount;

          startGame();
      }

  }





// MAIN PROCESS - Call upon the functions to actually make something happen
// ===================================================================================
// Initiates the code the first time
startGame(); // Need this to run the function.

// Register keyclicks
document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

  // Always be Saving / Testing / Debugging
  console.log(letterGuessed);
}
