let possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id;
    document.getElementById("user-choice").innerHTML = userChoice;
    generateComputerChoice();
    document.getElementById("computer-choice").innerHTML = computerChoice;
    getResult();
    document.getElementById("result").innerHTML = result;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 3 (non included)
    if (randomNumber === 0) {
        computerChoice = 'rock';

    }
    if (randomNumber === 1) {
        computerChoice = 'paper';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
}


    function getResult() {
        if (userChoice == 'rock' && computerChoice == 'rock') {
            result = "it's a draw!";
        }
        if (userChoice == 'scissors' && computerChoice == 'scissors') {
            result = "it's a draw!";
        }
        if (userChoice == 'paper' && computerChoice == 'paper') {
            result = "it's a draw!";
        }
        if (userChoice == 'rock' && computerChoice == 'paper') {
            computerScore = computerScore + 1;
            result = "Computer won!";
        }
        if (userChoice == 'scissors' && computerChoice == 'rock') {
            computerScore = computerScore + 1;
            result = "Computer won!";
        }
        if (userChoice == 'paper' && computerChoice == 'scissors') {
            computerScore = computerScore + 1;
            result = "Computer won!";
        }
        if (userChoice == 'rock' && computerChoice == 'scissors') {
            userScore = userScore + 1;
            result = "Player won!";
        }
        if (userChoice == 'scissors' && computerChoice == 'paper') {
            userScore = userScore + 1;
            result = "Player won!";
        }
        if (userChoice == 'paper' && computerChoice == 'rock') {
            userScore = userScore + 1;
            result = "Player won!";
        }
    }
