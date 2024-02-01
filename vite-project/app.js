import "./style.css";

// Creating the game board
const gameBoard = () => {
  // Queryselectors
  const startButton = document.querySelector("#start-button");
  const h1Element = document.querySelector("#start-text");
  const startButtonContainer = document.querySelector(
    "#start-button-container"
  );
  const easyBoardContainer = document.querySelector("#easy-board-container");
  // Array to store our cells
  const removeStart = () => {
    // Removing Our Elements To Start The Game
    h1Element.style.display = "none";
    startButtonContainer.style.display = "none";

    //This allows us to keep our board hidden until our event listener is clicked
    easyBoardContainer.classList.replace("hidden", "block");

    // this also allows us to keep our information hidden until our event listener is clicked
    const boardInformation = document.querySelector("#board-information");
    boardInformation.classList.replace("hidden", "block");
  };
  //Array board to keep track of our cells
  let cellArray = [];
  let playerGreenCell;
  let randomRedCell;

  const createGrid = () => {
    removeStart();
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
    playerGreenCell = cellArray[randomGreenIndex];
    playerGreenCell.classList.add("bg-green-600");

    // This would allow us to have our red starting point
    let randomRedIndex = Math.floor(Math.random() * cellArray.length);
    randomRedCell = cellArray[randomRedIndex];
    randomRedCell.classList.add("bg-red-600");

    // Incase if both random indexes land on the same one
    if (playerGreenCell === randomRedCell) {
      randomRedCell.classList.remove("bg-red-600");

      // this is just a precaution
      randomRedCell = cellArray[randomRedIndex + 1];
      playerGreenCell = cellArray[randomGreenIndex + 2];

      // this adds a new classlist value to our new cells
      playerGreenCell.classList.add("bg-green-600");
      randomRedCell.classList.add("bg-red-600");
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        console.log("working");
      }
    });
  };
  //This allows us to create the game
  startButton.addEventListener("click", createGrid);
};

gameBoard();
