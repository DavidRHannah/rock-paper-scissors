let humanScore      = 0;
let computerScore   = 0;

output = document.getElementById("output-text");
humanScoreText = document.getElementById("human-score-span");
computerScoreText = document.getElementById("computer-score-span");

rockBtn = document.getElementById("rock");
paperBtn = document.getElementById("paper");
scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", ()=>playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", ()=>playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", ()=>playRound("scissors", getComputerChoice()));

function playRound(humanChoice, computerChoice){
    let roundResult = "";

    if (computerScore >= 5 || humanScore >= 5){
        computerScore = 0;
        humanScore = 0;
    }

    if (humanChoice == computerChoice){
        roundResult = "It's a Tie"
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1
        roundResult = "You win! Rock beats Scissors"
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1
        roundResult = "You lose! Paper beats Rock"
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1
        roundResult = "You win! Paper beats Rock"
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1
        roundResult = "You lose! Scissors beats Paper"
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1
        roundResult = "You win! Scissors beats Paper"
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1
        roundResult = "You lose! Rock beats Scissors"
    }

    if (computerScore == 5){
        roundResult = "The computer has bested you!";
    } else if (humanScore == 5){
        roundResult = "You have bested the computer!";
    }

    computerScoreText.innerText = computerScore;
    humanScoreText.innerText = humanScore;
    output.innerText = roundResult;

}

function getComputerChoice(){
    ranNum = Math.floor(Math.random() * 3 + 1);
    choice = ""
    switch(ranNum){
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper"
            break;
        case 3:
            choice = "scissors"
    }
    return choice;
}