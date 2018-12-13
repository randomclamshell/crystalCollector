console.log("javascript has loaded");


//create variables for the game and set them equal to 0

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//total score for current game
var currentScore = 0;

var userScore = currentScore;

//make an array for the numbers

var numbers1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numbers2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numbers3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numbers4 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;




//variable for computer guess
var computerGuess = Math.floor(Math.random() * 20) + 50;
console.log(computerGuess);

$("#computerGuess").text(computerGuess);

function reset() {
  userScore = 0;
  computerGuess = Math.floor(Math.random() * 20) + 50;
  $("#userScore").text(userScore);

console.log("new number1: " + numbers1)
console.log("new number2: " + numbers2)
console.log("new number3: " + numbers3)
console.log("new number4: " + numbers4)
  } 

function youWon() {
  alert("You win!");
  reset();
}

function youLost() {
  alert("You lose! Try again!");
  reset();
}

//create event
$("#image1").on("click", function () {
  console.log("image 1 clicked")
  currentScore = currentScore + numbers1;
  $("#userScore").text(currentScore);

  if (currentScore === computerGuess) {
    youWon();
  } else if (currentScore > computerGuess) {
    youLost();
  }
});


$("#image2").on("click", function () {
  console.log("image 2 clicked")
  currentScore = currentScore + numbers2;
  $("#userScore").text(currentScore);
  if (currentScore === computerGuess) {
    youWon();
  } else if (currentScore > computerGuess) {
    youLost();
  }
});

$("#image3").on("click", function () {
  console.log("image 3 clicked")
  currentScore = currentScore + numbers3;
  $("#userScore").text(currentScore);
  if (currentScore === computerGuess) {
    youWon();
  } else if (currentScore > computerGuess) {
    youLost();
  }
});

$("#image4").on("click", function () {
  console.log("image 4 clicked")
  currentScore = currentScore + numbers4;
  $("#userScore").text(currentScore);
  console.log(currentScore);
  if (currentScore === computerGuess) {
    youWon();
  } else if (currentScore > computerGuess) {
    youLost();
  }
});

//variable for user guess



$("#userScore").text(currentScore);
console.log("loaded");

//reset the game
$("button").on("click", function () {
  reset();
  console.log(computerGuess);
  $("#computerGuess").text(computerGuess);
});




