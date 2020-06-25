//function constructor

/*let john = {
    name: 'John',
    yearofBirth: 1990,
    job: 'teacher'
};*/


/* constructor and prototypes
let Person = function(name, yearofBirth, job) {

    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
    //this.calculateAge = function() {
    //  console.log(2020 - this.yearofBirth);
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearofBirth);
};

Person.prototype.lastName = 'Smith';
let eric = new Person('Eric', 1980, 'Developer');
let jane = new Person('Jane', 2001, 'Designer');
let mark = new Person('Mark', 1998, 'PM');

eric.calculateAge();
console.log(eric.lastName);

*/


//object.create
/*
let personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    },
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'teacher';

let jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'develoepr' }
});

*/


//callbacks

/*let years = [1980, 1985, 1996, 2001, 2002];

function arrayCal(arr, fn) {
    let arrResult = [];
    for (let i in arr) {
        arrResult.push(fn(arr[i]));
    };
    return arrResult;
};

function calculateAge(el) {
    return 2020 - el;
};

function fullAge(el) {
    return el >= 21;
}

let ages = arrayCal(years, calculateAge);
let old = arrayCal(ages, fullAge);

console.log(ages)
console.log(old)*/


//closures

/*function retirement(retirementAge) {
    let desc = ' years left until retirement.';
    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + desc)
    }
}

retirement(65)(1980) */


/*function interview(job) {
    let textSample = ' works as a '
    return function(name) {
        console.log(name + textSample + job)
    }

}

interview('dev')('tim'); */




//call, apply, bind

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon'); */


// CODING CHALLENGE


/*
--- Console Game ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

8. After you display the result, display the next random question, so that the game never ends(Hint: write a
    function
    for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends.So include the option to quit the game
if the user writes 'exit'
instead of the answer.In this
case, DON 'T call the function from task 8.

10. Track the user 's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'
m going to use the power of closures
for this, but you don 't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console.Use yet another method
for this.
*/


(function() {
    let Question = function(ques, possibles, answer) {

        this.ques = ques;
        this.possibles = possibles;
        this.answer = answer;
        allQuestionPairs.push({
            ques,
            possibles,
            answer
        })
    };

    let allQuestionPairs = [];

    let cheese = new Question('Cheese is good?', (['yes', 'No']), 0)
    let cars = new Question('What\'s my favorite car brand?', ['Mercedes', 'Ferrari', 'Lamborghini', 'Bentley'], 2)
    let weather = new Question('What\'s for dinner?', ['Pizza', 'Steak', 'Paella'], 1)

    let score = 0
    let rounds = 0

    let randomQuestionPicker = Math.floor(Math.random() * (allQuestionPairs.length));
    let currentQuestion = allQuestionPairs[randomQuestionPicker]
    let currentAnswer = currentQuestion.possibles[currentQuestion.answer]
    let playerAnswer;
    let playAgainAnswer;


    let startRound = () => {
        if (rounds === 0) {
            rounds++
            alert('Welcome To The Game, Read the Console for the Questions. Press Okay to Start')
            console.log(' ')
            console.log('Your question is:');
            console.log(currentQuestion.ques);
            console.log(' ')
            console.log('Possible Answers:')
            console.log(showPossibles());
            playerAnswer = parseInt(prompt('Please select the correct answer (just type a number)'));
            isItCorrect()
        } else {
            playAgainAnswer = parseInt(prompt('Do you want another question Press 0 for YES and 1 for No (just type a number)'));
            playAgain(playAgainAnswer)
        }
        //console.log(rounds)
    };

    let showPossibles = () => {
        let c = 0
        for (let i of currentQuestion.possibles) {
            console.log(c++ + '. ' + i);
        };
    };

    let playAgain = (input) => {
        if (input === 1) {
            alert('Thanks for playing your total score was ' + score)
        } else {
            console.clear()
            console.log(' ');
            console.log('Your next question is:');
            console.log(currentQuestion.ques);
            console.log(' ')
            console.log('Possible Answers:')
            console.log(showPossibles());
            playerAnswer = parseInt(prompt('Please select the correct answer (just type a number)'));
            isItCorrect()
        }
    };



    let points = (num) => {
        if (num === 1) {
            score++
            console.log('Congrats, you got 1 point');
        } else {
            console.log('HAAAAA, you\'re terrible at this. No points for you')
        }
        console.log('You\'re current score is: ' + score);
        playAgainAnswer = parseInt(prompt('Do you want another question Press 0 for YES and 1 for No (just type a number)'));
        playAgain(playAgainAnswer)
    };


    let isItCorrect = () => {
        if (playerAnswer === currentQuestion.answer) {
            console.log('You are correct! ' + currentAnswer + ' was right!')
            points(1);
        } else {
            console.log(currentQuestion.possibles[playerAnswer] + ', Seriously? You\'re so wrong, it\'s sad! The right answer was ' + currentAnswer + ', obviously!');
            points(0);
        }
    };
    startRound();



})();