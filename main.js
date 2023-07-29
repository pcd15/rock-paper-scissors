function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    return(getRandomNumber(1, 3));
}

function reset() {
    endgame.innerHTML = null;
    playerScore = 0;
    player.textContent = playerScore;
    computerScore = 0;
    computer.textContent = computerScore;
}

function playRound() {
    let playerSelection = Number(this.id);
    let computerSelection = getComputerChoice();
    if (playerSelection === 1) {
        if (computerSelection === 3) {
            response.textContent = "You win! Rock beats Scissors.";
            playerScore++;
            player.textContent = playerScore;
        } else {
            response.textContent = "You lose! Paper beats Rock.";
            computerScore++;
            computer.textContent = computerScore;
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 1) {
            response.textContent = "You win! Paper beats Rock.";
            playerScore++;
            player.textContent = playerScore;
        } else {
            response.textContent = "You lose! Scissors beat Paper.";
            computerScore++;
            computer.textContent = computerScore;
        }
    } else {
        if (computerSelection === 2) {
            response.textContent = "You win! Scissors beat Paper.";
            playerScore++;
            player.textContent = playerScore;
        } else {
            response.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
            computer.textContent = computerScore;
        }
    }
    if (playerScore === 5) {
        endgame.appendChild(winner);
        endgame.appendChild(playAgain);
    }
    if (computerScore === 5) {
        endgame.appendChild(loser);
        endgame.appendChild(playAgain);
    }
}

let playerScore = 0;
let computerScore = 0;

const response = document.querySelector("#response");
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const endgame = document.querySelector('#endgame');

const btns = document.querySelectorAll('.button');
btns.forEach(btn => btn.addEventListener('click', playRound));

const playAgain = document.createElement('button');
playAgain.classList.add('button');
playAgain.textContent = 'Play Again';
playAgain.addEventListener('click', reset);

const winner = document.createElement('h1');
winner.textContent = "You won the game!";

const loser = document.createElement('h1');
loser.textContent = "You won the game!";