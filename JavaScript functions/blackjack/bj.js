var playerEl;
var dealerEl;
var gameStatus;


window.onload = (event) => {
    console.log('page is fully loaded');
    playerEl = document.getElementById('player')
    dealerEl = document.getElementById('dealer')
    gameStatus = document.getElementById('game-status')
    gameStatus.textContent = "Press 'HIT' To Begin!"
    console.log(playerEl)

};

let count = 0
let ace = false



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



function hit(player = true, ace = false) {
    gameStatus.textContent = "Game ON!"
    let card = getRandomInt(1, 11); //adds to count each action (button push, etc)
    // if (card == 1) {
    //     ace = true
    //     let aceLow = count + 1
    //     let aceHigh = count + 11
    //     count = aceLow + " or " + aceHigh
    //     playerEl.textContent = count
    // } else {
    console.log(count)
    count += card
    if (player == true) {
        playerEl.textContent = count
        if (count > 21) {
            playerEl.textContent = "BUST!"
            gameStatus.textContent = "YOU LOSE :("
            count = 0
        }
    } else if (player == false) {
        dealerEl.textContent = count
        if (count > 21) {
            dealerEl.textContent = "BUST!"
            count = 0
        }

    }
}


function stay() {
    count = 0
    while (parseInt(dealerEl.textContent) < 17) {
        hit(player = false)
    }
    if (parseInt(dealerEl.textContent) < (parseInt(playerEl.textContent)) || dealerEl.textContent == "BUST!") {
        count = 0
        gameStatus.textContent = "YOU WIN!!!"
    } else {
        gameStatus.textContent = "YOU LOSE :("
    }

}

function reset() {
    alert("Are you sure you want to reset?")
    count = 0
    gameStatus.textContent = "Press 'HIT' To Begin!"
    playerEl.textContent = 0
    dealerEl.textContent = 0
}