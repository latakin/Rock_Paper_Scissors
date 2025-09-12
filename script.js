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

function playRound() {
    const  humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if  (humanSelection === computerSelection) {
       alert(`its a tie, you both chose ${humanSelection}`) 
    } else if ((humanSelection === "rock"  &&  computerSelection === "scissors")  || (humanSelection === "scissors"  &&  computerSelection === "paper") || (humanSelection === "paper"  &&  computerSelection === "rock")) {
        alert (`You won, computer chose ${computerSelection}`)
        humanScore += 1;
    } else if ( (humanSelection === "paper"  && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock" ) || (humanSelection === "rock" && computerSelection === "paper") ) {
        alert(`Computer won, computer chose ${computerSelection}`)
        computerScore += 1;
    }
    
}


function playGame() {
    let gameTime = 0;
    while ( gameTime < 5) {
        playRound();
        gameTime += 1;
    }
    if(humanScore > computerScore) {
        alert(`You win with a score of ${humanScore} against computer's ${computerScore}  `)
    } else {
        alert(`Computer wins with a score of ${computerScore} against your score of ${humanScore}`)
    }
    
    
}


//playGame();

