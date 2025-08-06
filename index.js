var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var rgbH1 = document.querySelector("h1");

var squares = document.querySelectorAll(".square");
var correctSquare;

var randomColors = [];
var correctColor;

var level = "hard";

var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var newColorsButton = document.querySelector("#newColors");

var colorSquares = document.querySelector(".square");

function generateColors() {
  if (level == "hard") {
    randomColors = [
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
    ];
  } else if (level === "easy") {
    randomColors = [
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
      {
        redValue: Math.floor(Math.random() * 255 + 1),
        greenValue: Math.floor(Math.random() * 255 + 1),
        blueValue: Math.floor(Math.random() * 255 + 1),
      },
    ];
  }
}
function generateCorrectColor() {
  correctColor =
    randomColors[Math.floor(Math.random() * randomColors.length + 1)];
  for (i = 0; i < squares.length; i++) {
    if (squares[i].style.backgroundColor == correctRGB()) {
      correctSquare = squares[i];
    }
  }
}
function displayRGB() {
  red.textContent = correctColor.redValue;
  green.textContent = correctColor.greenValue;
  blue.textContent = correctColor.blueValue;
}
function correctRGB() {
  return (
    "rgb(" +
    correctColor.redValue +
    ", " +
    correctColor.greenValue +
    ", " +
    correctColor.blueValue +
    ")"
  );
}
function rgb(index) {
  return (
    "rgb(" +
    randomColors[index].redValue +
    ", " +
    randomColors[index].greenValue +
    ", " +
    randomColors[index].blueValue +
    ")"
  );
}
function displaySquares() {
  if (level === "hard") {
    for (i = 0; i < randomColors.length; i++) {
      squares[i].style.backgroundColor = rgb(i);
      squares[i].style.display = "inline-block";
    }
  }
}
function displayThreeSquares() {
  for (i = 0; i < randomColors.length; i++) {
    squares[i].style.backgroundColor = rgb(i);
  }
  for (i = 3; i < squares.length; i++) {
    squares[i].style.display = "none";
  }
}

function buttonReactions() {
  newColorsButton.addEventListener("click", playGame);
  hardButton.addEventListener("click", levelHard);
  easyButton.addEventListener("click", levelEasy);
}
function levelHard() {
  hardButton.classList.add("active");
  easyButton.classList.remove("active");
  level = "hard";
  playGame();
}
function levelEasy() {
  hardButton.classList.remove("active");
  easyButton.classList.add("active");
  level = "easy";
  playGame();
}
function pickedSquare() {
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var message = document.querySelector("p");
      message.style.display = block;
      if (squares[i].style.backgroundColor == correctRGB()) {
        message.textContent = "Correct!";
      }
    });
  }
}
function playGame() {
  generateColors();
  generateCorrectColor();
  displayRGB();
  if (level === "hard") {
    displaySquares();
  } else if (level === "easy") {
    displayThreeSquares();
  }
  buttonReactions();
}
playGame();
