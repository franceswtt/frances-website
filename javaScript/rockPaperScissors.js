const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const gameBtn = document.querySelectorAll(".gameBtn")

let player 
let computer
let result

function startGame() {
    $("#playerDisplay").hide()
    $("#computerDisplay").hide()
    $("#restartIcon").hide()
    $(".layer").fadeOut(400)
    $("#coverImage").fadeOut(400)
    $("#startText").animate({left: '150px'},900).animate({left: '-500px'},500)
    $(".button-holder").delay(1000).fadeIn()

}

gameBtn.forEach(button => button.addEventListener("click", () => {
    $(".button-holder").hide()
    $("#playerDisplay").fadeIn()
    $("#computerDisplay").delay(500).slideToggle()
    $("#resultDisplay").delay(700).animate({right: '190px'},1000).animate({right: '-500px'},500)
    $("#restartIcon").delay(2000).fadeIn()
    player = button.textContent
    computerTurn()
    playerDisplay.textContent = `You ${player}`
    computerDisplay.textContent = `VS ${computer}`
    resultDisplay.textContent = whoWin()
}))

function computerTurn(){
    const ranNum = Math.floor(Math.random() * 3) +1
    switch(ranNum){
        case 1:
            computer = "🖐"
            break
        case 2:
            computer = "✌"
            break
        case 3:
            computer = "👊"
    }
}



function whoWin(){

    if(player == computer){
        return "DRAW"
    }
    else if(player == "🖐"){
        return (computer=="👊")? "YOU WIN!" : "YOU LOSE!"
    }
    else if (player == "✌"){
        return (computer== "🖐")? "YOU WIN!" : "YOU LOSE!"
    }
    else if (player == "👊"){
        return (computer=="✌")? "YOU WIN!" : "YOU LOSE!"
    }
}
