function getComputerChoice() {
    const randomNumber = Math.random();
    if ((randomNumber * 3) >= 2) {
        return "rock";
    }
    else if (randomNumber*3 >= 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

    }

function getHumanChoice(choice) {
  const humanChoice = choice;
  console.log(`You chose: ${choice}`);
  return choice; 
}   

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  }
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  }
  console.log(`Your choice: ${humanChoice}, Computer's choice: ${computerChoice}`);
  console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
  return { humanScore, computerScore };
}


function playGame(choice) {
  if (isGameOver()) {
    console.log("Game is already over. Refresh to play again.");
    return;
  }

  const humanSelection = getHumanChoice(choice);
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (isGameOver()) {
    if (humanScore === 5) {
      console.log("🎉 Congratulations! You win the game!");
    } else {
      console.log("💻 The computer wins the game. Better luck next time!");
    }
  }
}

function isGameOver() {
  return humanScore === 5 || computerScore === 5
}

let humanScore = 0;
let computerScore = 0;

