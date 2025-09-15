const body = document.querySelector(".gameinterface");
const showGame = document.querySelector("#gamebutton");
const gamePlay = document.querySelector(".gameactivity");
const playerScoreUpdate = document.querySelector(".playerscore");
const computerScoreUpdate = document.querySelector(".computerscore");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const scoreDiv = document.querySelector(".score");
const optionButton = document.querySelector(".gameselection");
let computerSelection;
let humanSelection;
let message;
let humanScore = 0;
let computerScore = 0;

const roundUpdate = document.createElement("p");
gamePlay.insertBefore(roundUpdate, scoreDiv);

const gameOverMessage = document.createElement("p");
gameOverMessage.setAttribute("class", "gameOver");

const reloadButton = document.createElement("button");
reloadButton.textContent = "Restart";
reloadButton.setAttribute("id", "gamebutton");

function restartGame() {
  body.appendChild(reloadButton);
  reloadButton.addEventListener("click", () => {
    window.location.reload();
  });
}

//Displaying the game button div
function playGameButton() {
    showGame.addEventListener("click", () => {
  gamePlay.getAttribute("class");
  gamePlay.removeAttribute("class");
  gamePlay.setAttribute("class", "gameactivitydisplay");
  showGame.textContent = "LETS GO!!";
});
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let indexOfChoice = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[indexOfChoice];
  return computerChoice;
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    roundUpdate.textContent = `its a tie, you both chose ${humanSelection}`;
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    roundUpdate.textContent = `You won, computer chose ${computerSelection}`;
    humanScore += 1;
    playerScoreUpdate.textContent = `Your Point = ${humanScore}`;
    computerScoreUpdate.textContent = `Computer Point = ${computerScore}`;
  } else if (
    (humanSelection === "paper" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "rock") ||
    (humanSelection === "rock" && computerSelection === "paper")
  ) {
    roundUpdate.textContent = `Computer won, computer chose ${computerSelection}`;
    computerScore += 1;
    playerScoreUpdate.textContent = `Your Point = ${humanScore}`;
    computerScoreUpdate.textContent = `Computer Point = ${computerScore}`;
  }

  if (humanScore === 5) {
        optionButton.style.display = 'none';
      message = "Congratulations You WON";
      declareWinner(message);
      restartGame();
    } else if(computerScore === 5) {
        optionButton.style.display = 'none';
      message = "Sorry You Lost ";
      declareWinner(message);
      restartGame();
    }
}



rockButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  let humanSelection = "rock";

  playRound(humanSelection, computerSelection);
    
});

paperButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  let humanSelection = "paper";
  playRound(humanSelection, computerSelection);
  });

scissorsButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  let humanSelection = "scissors";
  playRound(humanSelection, computerSelection);
    
  
  });  




//updating scores
playerScoreUpdate.textContent = `Your Point = ${humanScore}`;
computerScoreUpdate.textContent = `Computer Point = ${computerScore}`;

function declareWinner(message) {
  gameOverMessage.textContent = `${message}`;
  body.appendChild(gameOverMessage);
}




playGameButton();
   

