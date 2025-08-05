var squares = document.querySelectorAll(".square");
var newColor = document.querySelector("#newColors");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");

var container = document.querySelector("#container");

var randomColors = [];
var footer = document.querySelector("footer");
var header = document.querySelector("#header");
var nav = document.querySelector("nav");
var body = document.body;

var randomRed = Math.floor(math.random() * 256 + 1);
var randomBlue = Math.floor(Math.random() * 256 + 1);
var randomGreen = Math.floor(Math.random() * 256 + 1);
var randomRGB =
  "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";

var level = "hard";
var correctColor;
var displayRGB = document.querySelector("h1");
var feedback = document.querySelector("p");
var clickedColor;

playGame();

function playGame() {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.cursor = "pointer";
  }
  if (level == "hard") {
    generateColors(6);
    pickColor(6);
  } else if (level == "easy") {
    generateColors(3);
    pickColor(3);
  }
  container.classList.add("mt-5");
  container.classList.remove("mt-3");
  feedback.textContent = "";
  displaySquares();
  buttonReactions();
  squaresClick();
  if (correctColor === undefined) {
    playGame();
  }
}

function displaySquares() {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColors[i];
  }
}
