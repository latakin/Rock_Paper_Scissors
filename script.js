let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let indexOfChoice = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[indexOfChoice]
    return computerChoice;
    
}

function getHumanChoice() {
    let humanChoice = prompt("choose your option rock, paper, scissors")
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if ( (humanChoice === "rock"  && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "scissors" ) || (humanChoice === "paper" && computerChoice === "paper")) {
       alert(`its a tie, you both chose ${humanChoice}`) 
    } else if ((humanChoice === "rock"  && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper" ) || (humanChoice === "paper" && computerChoice === "rock") ) {
        alert (`You won, computer chose ${computerChoice}`)
        humanScore += 1;
    } else {
        alert(`Computer won, computer chose ${computerChoice}`)
        computerScore += 1;
    }
    
}
const  humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);