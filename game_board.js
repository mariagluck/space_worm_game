// Create game board pixels:
const gameBoardPixelCount = 40;
const squareBoardPixelCount = Math.pow(gameBoardPixelCount, 2);

// scoreboard//
let foodEaten = 0;
let distanceTravelled = 0;

/// Game build///
const gameBox = document.getElementById("gameBox");

const makeGameBoard = () => {

  for (let i = 1; i <= squareBoardPixelCount; ++i) {
    gameBox.innerHTML = `${gameBox.innerHTML} <div class="gameBoard" id="pixel${i}"></div>`;
  }
};

// This variable always holds the updated array of game pixels created by makeGameBoard() :
const gameBoard = document.getElementsByClassName("gameBoard");

//FOOD

let currentFoodPlace = 0; // Initially set to 0
const createFood = () => {
  // Remove previous food;
  gameBoard[currentFoodPlace].classList.remove("food"); //read-only property that returns a live DOMTokenList collection of the class attributes of the element, can then be used to manipulate the class list ---> in this case to remove a "food""

  // Create new food
  currentFoodPlace = Math.random();
  currentFoodPlace = Math.floor(
    currentFoodPlace * squareBoardPixelCount
  );
  gameBoard[currentFoodPlace].classList.add("food"); //--> in this case to add "food"
};

//OBSTACLE BLACKHOLE

let blackholePlaceNow = 0; // Initially set to 0
const createblackhole = () => {
  // Remove previous food;
  gameBoard[blackholePlaceNow].classList.remove("blackhole"); //read-only property that returns a live DOMTokenList collection of the class attributes of the element, can then be used to manipulate the class list ---> in this case to remove a "food""

  // Create new food
  blackholePlaceNow = Math.random();
  blackholePlaceNow = Math.floor(
    blackholePlaceNow * squareBoardPixelCount
  );
  gameBoard[blackholePlaceNow].classList.add("blackhole"); //--> in this case to add "food"
};

//POP OVER WORM

function popWorm() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// SOUND ON POP OVER WORM
 let audio = document.getElementById('popOverSound'); 
 function play(){     
   audio.play() 
}
  