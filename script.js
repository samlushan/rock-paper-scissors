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

function getHumanChoice() {
    const userInput = prompt("Please enter rock, paper, or scissors:");
    const validInput=userInput.toLowerCase();
    if (validInput === "rock" || validInput === "paper" || validInput === "scissors") {
        return validInput;

    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice(); // Recursively ask for input until valid
    }
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer wins the game.");
    } else {
        console.log("It's a tie overall!");
    }
}   

let humanScore = 0;
let computerScore = 0;
playGame(); // Start the game

