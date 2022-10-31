const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const gameBtn = document.querySelectorAll(".gameBtn")

let player 
let computer
let result

function startGame() {
    document.querySelector(".layer").style.display = "none"
    document.querySelector("#gameContainer img").style.display = "none"
}

gameBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent
    computerTurn()
    playerDisplay.textContent = `You: ${player}`
    computerDisplay.textContent = `Computer: ${computer}`
    resultDisplay.textContent = whoWin()
}))

function computerTurn(){
    const ranNum = Math.floor(Math.random() * 3) +1
    switch(ranNum){
        case 1:
            computer = "ROCK"
            break
        case 2:
            computer = "PAPER"
            break
        case 3:
            computer = "SCISSORS"
    }
}

function whoWin(){

    if(player == computer){
        return "DRAW"
    }
    else if(player == "ROCK"){
        return (computer=="SCISSORS")? "YOU WIN!" : "YOU LOSE!"
    }
    else if (player == "PAPER"){
        return (computer== "ROCK")? "YOU WIN!" : "YOU LOSE!"
    }
    else if (player == "SCISSORS"){
        return (computer=="PAPER")? "YOU WIN!" : "YOU LOSE!"
    }
}
