const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const choiceBtns = document.querySelectorAll(".btn");
const rstbtn = document.querySelector(".rst");

let playerChoice;
let computerChoice;
let result;
let playerCount = 0;
let computerCount = 0;

function disabledButtons() {
  choiceBtns.forEach((buttons) => {
    buttons.disabled = true;
  });
}

function enabledButtons() {
  choiceBtns.forEach((buttons) => {
    buttons.disabled = false;
  });
}

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.id;
    computer();
    playerText.textContent = `player: ${playerChoice}`;
    computerText.textContent = `computer: ${computerChoice}`;

    game();
  })
);

rstbtn.addEventListener("click", () => {
  playerCount = 0;
  computerCount = 0;
  playerScore.textContent = `player: ${playerCount}`;
  computerScore.textContent = `computer: ${computerCount}`;
  enabledButtons();
});

function computer() {
  randNo = Math.floor(Math.random() * 3);
  switch (randNo) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
}

function game() {
  if (playerChoice == computerChoice) {
    resultText.textContent = "tie";
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    resultText.textContent = "player wins";
    playerCount += 1;
    playerScore.textContent = `player: ${playerCount}`;
    if (playerCount == 5) {
      resultText.textContent = "you won the game!!!";
      disabledButtons();
    }
  } else {
    resultText.textContent = "computer wins";
    computerCount += 1;
    computerScore.textContent = `computer: ${computerCount}`;
    if (computerCount == 5) {
      resultText.textContent = "computer won the game!!!";
      disabledButtons();
    }
  }
}
