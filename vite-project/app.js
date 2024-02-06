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
    let randomGreenIndex;
    let randomRedIndex;
    // colors
    const snakeColor = "bg-snake-green"
    const foodColor = "bg-red-600"
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
        randomGreenIndex = Math.floor(Math.random() * cellArray.length);
        playerGreenCell = cellArray[randomGreenIndex];
        playerGreenCell.classList.add(snakeColor);

        // This would allow us to have our red starting point
        randomRedIndex = Math.floor(Math.random() * cellArray.length);
        randomRedCell = cellArray[randomRedIndex];
        randomRedCell.classList.add(foodColor);

        // Incase if both random indexes land on the same one
        if (playerGreenCell === randomRedCell) {
            randomRedCell.classList.remove(foodColor);

            // this is just a precaution
            randomRedCell = cellArray[randomRedIndex + 1];
            playerGreenCell = cellArray[randomGreenIndex + 2];

            // this adds a new classlist value to our new cells
            playerGreenCell.classList.add(snakeColor);
            randomRedCell.classList.add(foodColor);
        }
        trackMovement();
    };
    // this function will keep track of our cells
    const trackMovement = () => {
        let interval
        const catchError = (e) => {
            // cells that are places on the border
            if (e instanceof TypeError) {
                alert("i think this is going to work");
            } else {
                alert("not working")
            }
        }
        let isIntervalRunning = false;
        const movePlayerMinus = (num) => {
            try {
                // up arrow key moves the cell 16 spots
                playerGreenCell.classList.remove(snakeColor);
                //this allows us to save and update the index when the event happens
                playerGreenCell = cellArray[randomGreenIndex -= num]; // randomGreenIndex = randomGreenIndex + 16
                playerGreenCell.classList.add(snakeColor);
            } catch (e) {
                catchError(e)
            }
        }
        const movePlayerPositive = (num) => {
            try {
                // up arrow key moves the cell 16 spots
                playerGreenCell.classList.remove(snakeColor);
                //this allows us to save and update the index when the event happens
                playerGreenCell = cellArray[randomGreenIndex += num]; // randomGreenIndex = randomGreenIndex + 16
                playerGreenCell.classList.add(snakeColor);
            } catch (e) {
                catchError(e)
            }
        }
        const startInterval = (moveFunction, num) => {
            interval = setInterval(() => {
                moveFunction(num)
            }, 1000)
            isIntervalRunning = true
        }
        const stopInterval = () => {
            clearInterval(interval)
            isIntervalRunning = false
        }
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    if (isIntervalRunning) {
                        stopInterval()
                    } else {
                        startInterval(movePlayerMinus, 16)
                    }
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    if (isIntervalRunning) {
                        stopInterval()
                    } else {
                        startInterval(movePlayerPositive, 16)
                    }
                    break;
                case "ArrowRight":
                case "a":
                case "A":
                    if (isIntervalRunning) {
                        stopInterval()
                    } else {
                        startInterval(movePlayerPositive, 1)
                    }
                    break;
                case "ArrowLeft":
                case "d":
                case "D":
                    if (isIntervalRunning) {
                        stopInterval()
                    } else {
                        startInterval(movePlayerMinus, 1)
                    }
                    break;
                default:
                    console.log("not working")
            }
        });
    };
    //This allows us to create the game
    startButton.addEventListener("click", createGrid);
};
gameBoard();