/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let p1 = {
    name: 'Player 1',
    active: 0,
    score: parseInt(document.getElementById('score-0').innerText),
    curScore: parseInt(document.getElementById('current-0').innerText),
};
let p2 = {
    name: 'Player 2',
    active: 1,
    score: parseInt(document.getElementById('score-1').innerText),
    curScore: parseInt(document.getElementById('current-1').innerText),
};

const GOAL = 20;
let activePlayer = 0;
let randomNum;

document.getElementById('btn-new').onclick = function startNewGame() {
    p1.active = 0;
    p2.active = 1;
    randomNum = 0;
    p1.score = (document.getElementById('score-0').innerText = 0);
    p2.score = (document.getElementById('score-1').innerText = 0);
    p1.curScore = (document.getElementById('current-0').innerText = 0);
    p2.curScore = (document.getElementById('current-1').innerText = 0);
    document.querySelector('#name-0').classList.remove('winner')
    document.querySelector('#name-1').classList.remove('winner')

};

document.getElementById('btn-roll').onclick = function rollDice() {
    diceFlip()
    document.querySelector('.dice').src = `dice-${randomNum}.png`
    console.log(randomNum)
    if (activePlayer === 0) {
        if (p1.curScore >= GOAL) {
            document.querySelector('#name-0').classList.add('winner')
            console.log(p1.name + ' is the winner!')
        } else if (randomNum === 1) {
            console.log(p1.name + ('\'s round is over!'))
            p1.curScore = (document.getElementById('current-0').innerText = 0);
            switchActive()
        } else if (randomNum > 1) {
            document.getElementById('current-0').innerText = (parseInt(document.getElementById('current-0').innerText) + randomNum);
            p1.curScore = document.getElementById('current-0').innerText
            if (p1.curScore >= GOAL) {
                console.log(p1.name + ' is the winner!')
                document.querySelector('#name-0').classList.add('winner')
            }
        }
    } else if (activePlayer === 1) {
        if (p2.curScore >= GOAL) {
            document.querySelector('#name-1').classList.add('winner')
            console.log(p2.name + ' is the winner!')
        } else if (randomNum === 1) {
            console.log(p2.name + ('\'s round is over!'))
            p2.curScore = (document.getElementById('current-1').innerText = 0);
            switchActive()
        } else if (randomNum > 1) {
            document.getElementById('current-1').innerText = (parseInt(document.getElementById('current-1').innerText) + randomNum);
            p2.curScore = document.getElementById('current-1').innerText
            if (p1.curScore >= GOAL) {
                console.log(p2.name + ' is the winner!')
                document.querySelector('#name-1').classList.add('winner')
            }
        }

    }
}



document.getElementById('btn-hold').onclick = function saveScore() {
    if (activePlayer === 0) {
        document.getElementById('score-0').innerText = (parseInt(document.getElementById('current-0').innerText) + parseInt(document.getElementById('score-0').innerText));
        if (document.getElementById('score-0').innerText >= GOAL) {
            console.log(p1.name + ' is the winner!')
            document.querySelector('#name-0').classList.add('winner')
        }
        p1.curScore = (document.getElementById('current-0').innerText = 0);
        switchActive()
    } else {
        if (activePlayer === 1) {
            document.getElementById('score-1').innerText = (parseInt(document.getElementById('current-1').innerText) + parseInt(document.getElementById('score-1').innerText));
            if (document.getElementById('score-1').innerText >= GOAL) {
                console.log(p2.name + ' is the winner!')
                document.querySelector('#name-1').classList.add('winner')
            }
            p2.curScore = (document.getElementById('current-1').innerText = 0);
            switchActive()
        }

    }
}

function switchActive() {
    if (activePlayer === 0) {
        activePlayer = 1;
        document.querySelector('.active').classList.replace('active', 'notActive')
        document.querySelector('.player-1-panel').classList.add('active')
    } else {
        activePlayer = 0;
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.notActive').classList.replace('notActive', 'active')
    }
}

function diceFlip() {
    randomNum = Math.floor(Math.random() * 6) + 1
    return randomNum
}