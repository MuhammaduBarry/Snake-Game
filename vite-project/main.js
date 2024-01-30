import "./style.css";

const startGame = () => {
  const startButton = document.querySelector("#start-button");
  const body = document.querySelector("body");
  const h1Element = document.querySelector('#start-text')

  startButton.addEventListener("click", () => {
    const startButtonParent = startButton.parentNode;
    
    // Removing Our Elements To Start The Game
    body.removeChild(startButtonParent);
    body.removeChild(h1Element);
  });
};
startGame();
