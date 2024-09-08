
playGame(5)

function playGame(roundAmnt){
    let humanScore = 0
    let computerScore = 0

    for (let i = 1; i <= roundAmnt; i++){
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        let roundResult = playRound(humanChoice, computerChoice)
        console.log(roundResult)
    }

    console.log("Human Score: ", humanScore)
    console.log("Computer Score: ", computerScore)

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            return "It's a Tie"
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            humanScore += 1
            return "You win! Rock beats Scissors"
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            computerScore += 1
            return "You lose! Paper beats Rock"
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            humanScore += 1
            return "You win! Paper beats Rock"
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            computerScore += 1
            return "You lose! Scissors beats Paper"
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            humanScore += 1
            return "You win! Scissors beats Paper"
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            return "You lose! Rock beats Scissors"
        }
    }
}


function getHumanChoice(){
    let inp = prompt("Rock Paper Scissors: ")
    inp = inp.toLowerCase()
    return inp;
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