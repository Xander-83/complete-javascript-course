/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let p0 = {
    score: parseInt(document.getElementById('score-0').innerText),
};
let p1 = {
    score: parseInt(document.getElementById('score-1').innerText),
};
let randomNum, randomNum2, diceCount, goal;
let activePlayer = 0;
let notActive = 1;
let curScore = parseInt(document.getElementById(`current-${activePlayer}`).innerText)

//start new game
document.getElementById('btn-new').onclick = function startNewGame() {
    document.querySelector('.dice').style.visibility = 'hidden';
    document.querySelector('.dice2').style.visibility = 'hidden';
    activePlayer = 0;
    notActive = 1;
    randomNum = 0;
    randomNum2 = 0;
    p0.score = (document.getElementById('score-0').innerText = 0);
    p1.score = (document.getElementById('score-1').innerText = 0);
    document.getElementById('current-0').innerText = 0;
    document.getElementById('current-1').innerText = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector(`#name-1`).classList.remove('winner')
    document.querySelector(`.player-1-panel`).classList.remove('active')
    document.querySelector(`.player-0-panel`).classList.remove('active')
    document.querySelector(`.player-0-panel`).classList.add('active')
    document.getElementById(`current-0`).innerText = 0;
    document.getElementById('name-0').innerText = prompt('Player 1, what is your name ?');
    document.getElementById('name-1').innerText = prompt('Player 2, what is your name ?');
    goal = parseInt(prompt('What score do you want to set as the goal?'));
    diceCount = parseInt(prompt('Do you want to play with 1 or 2 dice?'));

};

//roll dice


document.getElementById('btn-roll').onclick = function rollDice() {

    if (diceCount === 1) {
        document.querySelector('.dice2').style.visibility = 'hidden';
        document.querySelector('.dice').style.visibility = 'visible';
        diceFlip()
        document.querySelector('.dice').src = `dice-${randomNum}.png`
        console.log(randomNum)
        winnerTest(activePlayer, notActive)
    } else {
        document.querySelector('.dice').style.visibility = 'visible';
        document.querySelector('.dice2').style.visibility = 'visible';
        diceFlip()
        document.querySelector('.dice').src = `dice-${randomNum}.png`
        document.querySelector('.dice2').src = `dice-${randomNum2}.png`
        console.log('Dice 1: ' + randomNum);
        console.log('Dice 2: ' + randomNum2);
        winnerTest(activePlayer, notActive);
    }
}



// hold button
document.getElementById('btn-hold').onclick = function saveScore() {
    document.getElementById(`score-${activePlayer}`).innerText = (parseInt(document.getElementById(`current-${activePlayer}`).innerText) + parseInt(document.getElementById(`score-${activePlayer}`).innerText));
    //winnerTest(activePlayer, notActive)
    if (document.getElementById(`score-${activePlayer}`).innerText >= goal) {
        console.log(document.getElementById(`name-${activePlayer}`).innerText + ' is the winner!')
        document.getElementById(`name-${activePlayer}`).innerText = 'Winner!!';
        document.querySelector(`.player-${notActive}-panel`).classList.remove('active')
        document.querySelector(`#name-${activePlayer}`).classList.add('winner')
        return
    }
    curScore = (document.getElementById(`current-${activePlayer}`).innerText = 0);
    switchActive()
}



//tests for winner
function winnerTest(win, lose) {
    console.log(diceCount)
    if (curScore >= goal) {
        document.querySelector(`#name-${activePlayer}`).classList.remove('active')
        document.querySelector(`.player-${win}-panel`).classList.add('active')
        document.querySelector(`#name-${notActive}`).classList.remove('active');
        document.querySelector(`#name-${activePlayer}`).classList.add('winner')
        console.log(document.getElementById(`name-${win}`).innerText + ' is the winner!')
    }

    if (diceCount === 2) {
        if (randomNum === 1 || randomNum2 === 1) {
            console.log(document.getElementById(`name-${win}`).innerText + ('\'s round is over!'))
            curScore = (document.getElementById(`current-${win}`).innerText = 0);
            switchActive()
        } else {
            document.getElementById(`current-${win}`).innerText = (parseInt(document.getElementById(`current-${win}`).innerText) + randomNum + randomNum2);
            curScore = document.getElementById(`current-${win}`).innerText
            console.log('current score tally' + curScore)
            if (curScore >= goal) {

                console.log(document.getElementById(`name-${win}`).innerText + ' is the winner!')
                document.getElementById(`name-${win}`).innerText = 'Winner!!';
                document.querySelector(`#name-${win}`).classList.add('winner')
                document.querySelector('player-' + lose + '-panel').classList.remove('active');
                document.querySelector(`#name-${notActive}`).classList.remove('active');
            }
        }
    } else if (diceCount === 1) {
        if (randomNum === 1) {
            console.log(document.getElementById(`name-${win}`).innerText + ('\'s round is over!'))
            curScore = (document.getElementById(`current-${win}`).innerText = 0);
            switchActive()
        } else {
            document.getElementById(`current-${win}`).innerText = (parseInt(document.getElementById(`current-${win}`).innerText) + randomNum);
            curScore = document.getElementById(`current-${win}`).innerText
            if (curScore >= goal) {
                console.log(document.getElementById(`name-${win}`).innerText + ' is the winner!')
                document.getElementById(`name-${win}`).innerText = 'Winner!!';
                document.querySelector(`#name-${win}`).classList.add('winner')
                document.querySelector('player.-' + lose + '-panel').classList.remove('active');
                document.querySelector(`#name-${notActive}`).classList.remove('active');
            }
        }

    } else if (randomNum > 1) {
        document.getElementById(`current-${win}`).innerText = (parseInt(document.getElementById(`current-${win}`).innerText) + randomNum);
        curScore = document.getElementById(`current-${win}`).innerText
        if (curScore >= goal) {
            console.log(document.getElementById(`name-${win}`).innerText + ' is the winner!')
            document.getElementById(`name-${win}`).innerText = 'Winner!!';
            document.querySelector(`#name-${win}`).classList.add('winner')
            document.querySelector('player.-' + lose + '-panel').classList.remove('active');
            document.querySelector(`#name-${notActive}`).classList.remove('active');
        }
    }
};





function switchActive() {
    document.querySelector(`#name-${notActive}`).classList.remove('active')
    document.querySelector(`#name-${activePlayer}`).classList.remove('active')
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
    randomNum2 = Math.floor(Math.random() * 6) + 1
    return randomNum
    return randomNum2
}