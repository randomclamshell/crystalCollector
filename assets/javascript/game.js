//VARIABLES
// ------------------------------------------------------------------------------------

//total score for current game
var currentScore = 0;
var userScore = currentScore;
$("#userScore").text(currentScore);

//assign a value to each crystal
var c1 = Math.floor(Math.random() * 9) + 1;
var c2 = Math.floor(Math.random() * 9) + 1;
var c3 = Math.floor(Math.random() * 9) + 1;
var c4 = Math.floor(Math.random() * 9) + 1;

//variable for computer guess
var computerGuess = Math.floor(Math.random() * 100 + 1);
$("#computerGuess").text(computerGuess);

//variables for wins and losses

var wins = 0;
$("#gamesWon").text(wins);
var losses = 0;
$("#gamesLost").text(losses);

//FUNCTIONS
// ------------------------------------------------------------------------------------

//reset game function
function reset() {
  currentScore = 0;
  computerGuess = Math.floor(Math.random() * 100 + 1);
  c1 = Math.floor(Math.random() * 9) + 1;
  c2 = Math.floor(Math.random() * 9) + 1;
  c3 = Math.floor(Math.random() * 9) + 1;
  c4 = Math.floor(Math.random() * 9) + 1;
  $("#userScore").text(userScore);
  $("#computerGuess").text(computerGuess)
}

//win
function youWin() {
  alert("You win!");
  wins++;
  $("#gamesWon").text(wins);
  reset();
}

//lose
function youLose() {
  alert("You lose! Try again!");
  losses++;
  $("#gamesLost").text(losses)
  reset();
}

//EVENTS
// ------------------------------------------------------------------------------------

$("#image1").on("click", function () {

  currentScore = currentScore + c1;
  $("#userScore").text(currentScore);

  if (currentScore === computerGuess) {
    youWin();
  } else if (currentScore > computerGuess) {
    youLose();
  }
});

$("#image2").on("click", function () {

  currentScore = currentScore + c2;
  $("#userScore").text(currentScore);

  if (currentScore === computerGuess) {
    youWin();
  } else if (currentScore > computerGuess) {
    youLose();
  }
});

$("#image3").on("click", function () {

  currentScore = currentScore + c3;
  $("#userScore").text(currentScore);

  if (currentScore === computerGuess) {
    youWin();
  } else if (currentScore > computerGuess) {
    youLose();
  }
});

$("#image4").on("click", function () {

  currentScore = currentScore + c4;
  $("#userScore").text(currentScore);

  if (currentScore === computerGuess) {
    youWin();
  } else if (currentScore > computerGuess) {
    youLose();
  }
});

//reset the game
$("button").on("click", function () {
  reset();
  $("#computerGuess").text(computerGuess);
});




