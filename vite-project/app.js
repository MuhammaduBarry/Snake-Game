import "./style.css";

// Creating the game board
const gameBoard = () => {
  // Queryselectors
  const startButton = document.querySelector("#start-button");
  const body = document.querySelector("#body");
  const h1Element = document.querySelector("#start-text");
  const startButtonContainer = document.querySelector(
    "#start-button-container"
  );
  // Array to store our cells
  let cellArray = [];
  const createGrid = () => {
    // Removing Our Elements To Start The Game
    body.removeChild(h1Element)
    body.removeChild(startButtonContainer);

    //This allows us to keep our board hidden until our event listener is clicked
    const easyBoardContainer = document.querySelector("#easy-board-container");
    easyBoardContainer.classList.replace("hidden", "block");

    // this also allows us to keep our information hidden until our event listener is clicked
    const boardInformation = document.querySelector("#board-information");
    boardInformation.classList.replace("hidden", "block");

    for (let i = 0; i < 256; i++) {
      const cell = document.createElement("div");
      cell.className = "border border-white";
      easyBoardContainer.appendChild(cell);
      cellArray.push(cell);
      // This will help us create a unique id for each individual cell
      cell.id = `cell-${i}`;
    }
    // This would allow us to have our green starting point
    let randomGreenIndex = Math.floor(Math.random() * cellArray.length);
    let randomGreenCell = cellArray[randomGreenIndex];
    randomGreenCell.classList.add("bg-green-600");

    // This would allow us to have our red starting point
    let randomRedIndex = Math.floor(Math.random() * cellArray.length);
    let randomRedCell = cellArray[randomRedIndex];
    randomRedCell.classList.add("bg-red-600");

    // Incase if both random indexes land on the same one
    if (randomGreenCell === randomRedCell) {
      randomRedCell.classList.remove("bg-red-600");

      // this is just a precaution
      randomRedCell = cellArray[randomRedIndex + 1];
      randomGreenCell = cellArray[randomGreenIndex + 2];

      // this adds a new classlist value to our new cells
      randomGreenCell.classList.add("bg-green-600");
      randomRedCell.classList.add("bg-red-600");

      console.log(randomGreenCell, randomRedCell);
    }
  };
  startButton.addEventListener("click", createGrid);
};

function test() {
  const game = gameBoard();
  //   console.log(game.randomGreenCell);
}
test();
gameBoard();
