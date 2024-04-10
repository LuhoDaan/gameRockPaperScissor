const scissors = "SCISSORS";
const rock = "ROCK";
const paper = "PAPER";

let choices = [rock, paper, scissors];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    return choices[getRandomInt(0, 2)];
}

function playRound(userInput) {
    let computerSelection = getComputerChoice();
    userInput = userInput.toUpperCase();

   
    if (!choices.includes(userInput)) {
        displayInput("You entered a non-valid selection! Your choice: " + userInput + ". Computer's choice: " + computerSelection + ".");
        return;
    }

    let output;
    if (userInput === computerSelection) {
        output = "Break even!";
    } else if (
        (userInput === "ROCK" && computerSelection === "SCISSORS") ||
        (userInput === "PAPER" && computerSelection === "ROCK") ||
        (userInput === "SCISSORS" && computerSelection === "PAPER")
    ) {
        output = "You won!";
    } else {
        output = "You lost!";
    }

    displayInput(output + " Your choice: " + userInput + ". Computer's choice: " + computerSelection + ".");
}



/* document.addEventListener('DOMContentLoaded', function() { */

    document.getElementById('paperButton').addEventListener('click', function() {
        playRound("paper");
    });
    document.getElementById('rockButton').addEventListener('click', function() {
        playRound("rock");
    });
    document.getElementById('scissorsButton').addEventListener('click', function() {
        playRound("scissors");
    });


function displayInput(message) {
   
    var outputElement = document.getElementById('output');

    
    outputElement.innerText = message;
}
