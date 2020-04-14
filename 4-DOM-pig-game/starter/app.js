/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let p0 = {
    name: 'Player 1',
    score: parseInt(document.getElementById('score-0').innerText),
};
let p1 = {
    name: 'Player 2',
    score: parseInt(document.getElementById('score-1').innerText),
};

const GOAL = 20;
let activePlayer = 0;
let notActive = 1;
let randomNum;
let curScore = parseInt(document.getElementById(`current-${activePlayer}`).innerText)

//start new game
document.getElementById('btn-new').onclick = function startNewGame() {
    p0.name = prompt('What is your name ?');
    p1.name = prompt('What is your name ?');
    document.getElementById('name-0').innerText = p0.name;
    document.getElementById('name-1').innerText = p1.name;
    activePlayer = 0;
    randomNum = 0;
    p0.score = (document.getElementById('score-0').innerText = 0);
    p1.score = (document.getElementById('score-1').innerText = 0);
    document.getElementById('current-0').innerText = 0;
    document.getElementById('current-1').innerText = 0;
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');

};

//roll dice
document.getElementById('btn-roll').onclick = function rollDice() {
    diceFlip()
    document.querySelector('.dice').src = `dice-${randomNum}.png`
    console.log(randomNum)
    winnerTest(activePlayer, notActive)
}


// hold button
document.getElementById('btn-hold').onclick = function saveScore() {
    document.getElementById(`score-${activePlayer}`).innerText = (parseInt(document.getElementById(`current-${activePlayer}`).innerText) + parseInt(document.getElementById(`score-${activePlayer}`).innerText));
    winnerTest(activePlayer, notActive)
    if (document.getElementById(`score-${activePlayer}`).innerText >= GOAL) {
        console.log(document.getElementById(`name-${activePlayer}`).innerText + ' is the winner!')
        document.querySelector(`#name-${notActive}`).classList.remove('active');
        document.querySelector(`#name-${activePlayer}`).classList.add('winner')
    }
    curScore = (document.getElementById(`current-${activePlayer}`).innerText = 0);
    switchActive()
}



//tests for winner
function winnerTest(win, loose) {
    if (curScore >= GOAL) {
        document.querySelector(`#name-${win}`).classList.add('winner')
        document.querySelector(`#name-${loose}`).classList.remove('active');
        console.log(document.getElementById(`name-${win}`).innerText + ' is the winner!')
    } else if (randomNum === 1) {
        console.log(document.getElementById(`name-${win}`).innerText + ('\'s round is over!'))
        curScore = (document.getElementById(`current-${win}`).innerText = 0);
        switchActive()
    } else if (randomNum > 1) {
        document.getElementById(`current-${win}`).innerText = (parseInt(document.getElementById(`current-${win}`).innerText) + randomNum);
        curScore = document.getElementById(`current-${win}`).innerText
        if (curScore >= GOAL) {
            console.log(document.getElementById(`name-${win}`).innerText + ' is the winner!')
            document.querySelector(`#name-${win}`).classList.add('winner')
            document.querySelector(`#name-${loose}`).classList.remove('active');
            document.querySelector(`#name-${notActive}`).classList.remove('active');
        }
    }
};




function switchActive() {
    if (activePlayer === 0) {
        activePlayer = 1;
        notActive = 0;
        document.querySelector('.active').classList.replace('active', 'notActive')
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')
    } else {
        activePlayer = 0;
        notActive = 1;
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.notActive').classList.replace('notActive', 'active')
    }
}

function diceFlip() {
    randomNum = Math.floor(Math.random() * 6) + 1
    return randomNum
}