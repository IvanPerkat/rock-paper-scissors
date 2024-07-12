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

console.log(getHumanChoice());
