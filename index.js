//logic
//Rock beats scissors, scissors beat paper, and paper beats rock.

//plan
//create function for computer choice
//used the math.random, it was used to divide the rock, paper and scissors so as to generate randomly.
//used the for loop to return either rock, paper or scissors
//create function for human choice
//used the prompt to accept input from the user
//used the while loop to validate the human input with the computer choices
//create function to play the game between human and computer

function getComputerChoice(){
    let randomVariable = Math.random()

    if (randomVariable < 1/3 ){
        return "rock"
    } else if (randomVariable < 2/3){
        return "paper"
    } else {
        return "scissors"
    }

}

// console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice(rock, paper,scissors): ").toLowerCase();
    while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
        humanChoice = prompt("Invalide choice. Enter your choice (rock, paper, or scissors").toLowerCase();

    }
    return humanChoice;

}

// console.log(getHumanChoice())


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    let result;

    if(humanChoice === computerChoice){
        result = "It is a tie ✌";
    } else if ((humanChoice ==="rock" && computerChoice === "scissors") || ( humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        result = `You win! 👍 ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    } else {
        result = `You lose! 😢 ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    }

    console.log(result);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);