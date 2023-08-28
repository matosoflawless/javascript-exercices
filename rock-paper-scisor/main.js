const choices = ["rock", "paper", "scissor"];
const winners = [];

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  logWins();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

function playerChoice() {
  let input = prompt("Type rock, paper, or scissor");

  // Check if the user pressed "Cancel" or provided valid input.
  while (input === null || !validateInput(input)) {
    if (input === null) {
      // Handle the case when the user cancels the prompt.
      return null;
    }
    input = prompt("Type rock, paper, or scissor. Spelling must be exact");
  }

  return input.toLowerCase(); // Convert to lowercase and return valid input.
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    console.log(choiceP, choiceC);
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissor") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
    const playerWins = winners.filter(winner => winner === "Player").length;
    const computerWins = winners.filter(winner => winner === "Computer").length;
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    if (playerWins > computerWins) {
      console.log("Player wins the game!");
    } else if (computerWins > playerWins) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
game();
