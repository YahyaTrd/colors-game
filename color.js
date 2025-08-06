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
var message = document.querySelector("p");

function generateColors() {
  randomColors = [];
  const numColors = level === "hard" ? 6 : 3;
  for (let i = 0; i < numColors; i++) {
    randomColors.push({
      redValue: Math.floor(Math.random() * 256),
      greenValue: Math.floor(Math.random() * 256),
      blueValue: Math.floor(Math.random() * 256),
    });
  }
}

function generateCorrectColor() {
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  correctColor = randomColors[randomIndex];
  correctSquare = squares[randomIndex]; // Track correct square by index
}

function displayRGB() {
  red.textContent = correctColor.redValue;
  green.textContent = correctColor.greenValue;
  blue.textContent = correctColor.blueValue;
}

function correctRGB() {
  return `rgb(${correctColor.redValue}, ${correctColor.greenValue}, ${correctColor.blueValue})`;
}

function rgb(index) {
  return `rgb(${randomColors[index].redValue}, ${randomColors[index].greenValue}, ${randomColors[index].blueValue})`;
}

function displaySquares() {
  for (let i = 0; i < squares.length; i++) {
    if (i < randomColors.length) {
      squares[i].style.backgroundColor = rgb(i);
      squares[i].style.display = "inline-block";
    } else {
      squares[i].style.display = "none"; // Hide extra squares in easy mode
    }
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
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      message.style.display = "block";
      // Normalize RGB strings for comparison
      const clickedColor = this.style.backgroundColor
        .replace(/\s/g, "")
        .toLowerCase();
      const correctColorStr = correctRGB().replace(/\s/g, "").toLowerCase();
      if (clickedColor === correctColorStr) {
        message.textContent = "Correct!";
        // Set all squares to correct color
        for (let j = 0; j < squares.length; j++) {
          squares[j].style.backgroundColor = correctRGB();
          squares[j].style.display = "inline-block";
        }
        rgbH1.style.backgroundColor = correctRGB();
      } else {
        message.textContent = "Try Again!";
        this.style.backgroundColor = "#232323"; // Hide incorrect square
      }
    });
  }
}

function playGame() {
  message.textContent = "";
  message.style.display = "none";
  rgbH1.style.backgroundColor = "steelblue";
  generateColors();
  generateCorrectColor();
  displayRGB();
  displaySquares();
}

buttonReactions();
pickedSquare();
playGame();
