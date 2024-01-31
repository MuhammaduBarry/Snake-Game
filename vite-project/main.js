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
    easyBoardContainer.classList.replace("hidden", "block")

    // this also allows us to keep our information hidden until our event listener is clicked
    const boardInformation = document.querySelector("#board-information");
    boardInformation.classList.replace("hidden", "block")

    // creating a grid board for the game
    const createEasyBoard = () => {
      for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className =
          "border border-red-500";
        easyBoardContainer.appendChild(cell);
      }
    };

    createEasyBoard();
  });
};
startGame();
