let choices = ["rock", "paper", "scissors"];
let playDisplay = document.getElementById('playDisplay');
let computerDisplay = document.getElementById('computerDisplay');
let resultDisplay = document.getElementById('resultDisplay');

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie😑";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win🥳" : "You Lose🤦‍♂️";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win🥳" : "You Lose🤦‍♂️";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win🥳" : "You Lose🤦‍♂️";
                break;
        }
    }

    playDisplay.textContent = 'Player: ' + playerChoice;
    computerDisplay.textContent = 'Computer: ' + computerChoice;
    resultDisplay.textContent = result;
}
