import "./style.css";

const startGame = () => {
  const startButton = document.querySelector("#start-button");
  const body = document.querySelector("body");
  const h1Element = document.querySelector("#start-text");

  startButton.addEventListener("click", () => {
    const startButtonParent = startButton.parentNode;

    // Removing Our Elements To Start The Game
    body.removeChild(startButtonParent);
    body.removeChild(h1Element);

    //This allows us to keep our board hidden until our event listener is clicked
    const easyBoardContainer = document.querySelector("#easy-board-container");
    easyBoardContainer.classList.replace("hidden", "block");

    // this also allows us to keep our information hidden until our event listener is clicked
    const boardInformation = document.querySelector("#board-information");
    boardInformation.classList.replace("hidden", "block");

    let cellArray = [];
    // const randomCell = Math.floor(Math.random() * i)
    // creating a grid board for the game
    const createEasyBoard = () => {
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
      randomGreenCell.classList.add("bg-green-500");

      // This would allow us to have our red starting point
      let randomRedIndex = Math.floor(Math.random() * cellArray.length);
      let randomRedCell = cellArray[randomRedIndex];
      randomRedCell.classList.add("bg-red-500");

      // Incase if both random indexes land on the same one
      if (randomGreenCell === randomRedCell) {
        randomRedCell.classList.remove("bg-red-500");

        // this is just a precaution
        randomRedCell = cellArray[randomRedIndex + 1];
        randomGreenCell = cellArray[randomGreenIndex + 2];

        // this adds a new classlist value to our new cells
        randomGreenCell.classList.add("bg-green-500");
        randomRedCell.classList.add("bg-red-500");

        console.log(randomGreenCell, randomRedCell);
      }
    };

    createEasyBoard();
  });
};
startGame();
