function getComputerChoice(){
    const randomNumber=Math.random();

    if(randomNumber<0.33){
        return "Rock";
    }
    else if(randomNumber<0.66){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    const userInput= prompt("Enter 'Rock', 'Paper', or 'Scissors' ");
    return userInput;
}

function playGame(){
let humanScore=0;
let computerScore=0;

function playRound(computerChoice, humanChoice){
    humanChoice=humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1);   

    if(humanChoice===computerChoice){
        console.log("Its a tie!");
    }
    else if(humanChoice==="Rock" && computerChoice==="Scissors" || humanChoice==="Scissors" && computerChoice==="Paper" || humanChoice==="Paper" && computerChoice==="Rock"){
        console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Your Scores: \nHuman: ${humanScore} \nComputer: ${computerScore}`);
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

console.log("Final Scores:");

if(humanScore>computerScore){
    console.log("You are the Winner!!");
}
else if(computerScore>humanScore){
    console.log("Oops!, Computer won :( ");
}
else{
    console.log("OMG, It's a tie!");
}

}

playGame();