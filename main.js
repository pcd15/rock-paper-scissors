function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    let num = getRandomNumber(1, 3);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors.");
        } else {
            console.log("You lose! Paper beats Rock.");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock.");
        } else {
            console.log("You lose! Scissors beat Paper.");
        }
    } else {
        if (computerSelection === "paper") {
            console.log("You win! Scissors beat Paper.");
        } else {
            console.log("You lose! Rock beats Scissors");
        }
    }
}

function game(numGames, playerSelection) {
    for (let i = 0; i < numGames; i++) {
        playRound(playerSelection);
    }
}

game(5, "ROCK");