import "./style.css";

// Creating the game board
const gameBoard = () => {
    // querySelectors
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
                location.reload()
            } else {
                location.reload()
            }
        }
        let isIntervalRunning = false;
        const movePlayerMinus = (num) => {
            try {
                const newIndex = randomGreenIndex - num;
                // Check if the new index is within the grid boundaries and not hitting the right wall
                // when you divide by 16 all the left cells - num of the wall have a remainder of 15
                // This checks to see if a new row has started
                if (newIndex >= 0 && newIndex % 16 === 15) {
                    location.reload()
                } else {
                    playerGreenCell.classList.remove(snakeColor);
                    randomGreenIndex = newIndex;
                    playerGreenCell = cellArray[randomGreenIndex];
                    playerGreenCell.classList.add(snakeColor);
                }
            } catch (e) {
                catchError(e);
            }
        };

        const movePlayerPositive = (num) => {
            try {
                const newIndex = randomGreenIndex + num;
                // Check if the new index is within the grid boundaries and not hitting the left wall
                // when you divide by 16 all the right cells + num of the wall have no remainder
                // this checks to see if a new row has started
                if (newIndex < cellArray.length && newIndex % 16 === 0) {
                    alert("didnt work");
                } else {
                    playerGreenCell.classList.remove(snakeColor);
                    randomGreenIndex = newIndex;
                    playerGreenCell = cellArray[randomGreenIndex];
                    playerGreenCell.classList.add(snakeColor);
                }

            } catch (e) {
                catchError(e);
            }
        };

        const startInterval = (moveFunction, num) => {
            interval = setInterval(() => {
                moveFunction(num)
            }, 300)
        }
        const stopInterval = () => {
            clearInterval(interval)
        }
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    startInterval(movePlayerMinus, 16)
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    startInterval(movePlayerPositive, 16)
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    startInterval(movePlayerPositive, 1)
                    break;
                case "ArrowLeft":
                case "a":
                case "A":
                    startInterval(movePlayerMinus, 1)
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