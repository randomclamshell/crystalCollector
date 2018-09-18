console.log("javascript has loaded");


//create variables for the game and set them equal to 0

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//total number of wins and losses

var totalWins = 0;
var totalLosses = 0;

//total score for current game
var currentScore = 0;


//make an array for the numbers

var numbers1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1; 
var numbers2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numbers3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numbers4 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;


console.log("this is number1: " + numbers1)

//variable for computer guess
var computerGuess = Math.floor(Math.random() * 20) + 50;
console.log(computerGuess);

$("#computerGuess").text(computerGuess);

//create event
$("#image1").on("click", function() {
  console.log("image 1 clicked")
  currentScore = currentScore + numbers1;
  console.log(currentScore);

  $("#image2").on("click", function() {
    console.log("image 1 clicked")
    currentScore = currentScore + numbers1;
    console.log(currentScore);

    $("#image3").on("click", function () {
      console.log("image 1 clicked")
      currentScore = currentScore + numbers1;
      console.log(currentScore);

      $("#image4").on("click", function () {
        console.log("image 1 clicked")
        currentScore = currentScore + numbers1;
        console.log(currentScore);
        // put in 0n screen

        // if crr

      });

      //variable for user guess
      var userGuess;

      //reset the game
      $("#newGame").on("click", function () {
        totalLosses = 0;
        totalWins = 0;
        computerGuess = Math.floor(Math.random() * 20) + 50;

        console.log(newGameButton);
      });

      //rules

      if (computerGuess === userGuess) {
        totalWins++;
        } else {
          totalLosses++;
      };