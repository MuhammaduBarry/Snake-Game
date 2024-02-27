// Board
const blockSize = 25; // This represents one square size
const rows = 20;
const cols = 20;
let board;
let context;

// Drawing snake head
// The snake starts at (5,5) coordinates
// We multiplied them by blockSize to make sure it fills up the block
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let snakeBody = [];
let velocityX = 0;
let velocityY = 0;

// Drawing snake food
let foodX;
let foodY;

let gameOver = false;
window.onload = () => {
  if (gameOver) {
    return;
  }
  board = document.querySelector("#board");
  board.height = rows * blockSize; // This creates the height of the board
  board.width = cols * blockSize; // This creates the width of the board
  context = board.getContext("2d"); // This is used for drawing on the board

  placeFoodRandom();
  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 10); // every 100 milliseconds the update function will run
};

const update = () => {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  // Food decoration
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFoodRandom();
  }
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }
  // Snake decoration
  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  // Game over condition
  if (
    snakeX < 0 ||
    snakeX > cols * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    location.reload();
  }
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      location.reload();
    }
  }
};

const changeDirection = (e) => {
  if (e.code === "ArrowUp" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code === "ArrowDown" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code === "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code === "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
};
const placeFoodRandom = () => {
  foodX = Math.floor(Math.random() * cols) * blockSize; // this creates a random x coordinate and makes sure blocksize fills it up
  foodY = Math.floor(Math.random() * rows) * blockSize; // this creates a random y coordinate and makes sure blocksize fills it up
};
