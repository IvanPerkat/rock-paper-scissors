function getComputerChoice(number = (Math.floor(Math.random() * 3))) {
    if(number === 0) {
        return "Rock";
    } else if(number === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(choice = prompt("What is your choice?")) {
    if(choice.toLowerCase() === "rock") {
        return "Rock";
    } else if(choice.toLowerCase() === "paper") {
        return "Paper";
    } else if(choice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        alert("Invalid input!");
    }
}

let humanScore = 0, 
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch(humanChoice.toLowerCase() === "rock") {
        case (computerChoice.toLowerCase() === "rock") : 
            return console.log("It's a draw!");
        case(computerChoice.toLowerCase() === "paper") :
            computerScore++;
            return console.log("You lose! Paper beats rock!");
        case(computerChoice.toLowerCase() === "scissors") : 
            humanScore++;
            return console.log("You win! Rock beats scissors!");
    } switch(humanChoice.toLowerCase() === "paper") {
        case (computerChoice.toLowerCase() === "rock") : 
            humanScore++;
            return console.log("You win! Paper beats rock!");
        case(computerChoice.toLowerCase() === "paper") :
            return console.log("It's a draw!");
        case(computerChoice.toLowerCase() === "scissors") : 
            computerScore++;
            return console.log("You lose! Scissors beats paper!");
    } switch(humanChoice.toLowerCase() === "scissors") {
        case (computerChoice.toLowerCase() === "rock") : 
            computerScore++;
            return console.log("You lose! Rock beats scissors!");
        case(computerChoice.toLowerCase() === "paper") :
            humanScore++;
            return console.log("You win! Scissors beats paper!");
        case(computerChoice.toLowerCase() === "scissors") : 
            return console.log("It's a draw!");
    }
}

playRound(getHumanChoice(), getComputerChoice());
