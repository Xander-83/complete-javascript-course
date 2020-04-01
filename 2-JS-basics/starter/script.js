console.log('yup');
console.log('   ');

/* part 1
let calBMI = (mass, height) => {
    return mass / (height * height)
}
let markMass = prompt('What is Mark\'s weight?');
let markHeight = prompt('What is Mark\'s height in meters?');
let johnMass = prompt('What is John\'s weight?');
let johnHeight = prompt('What is John\'s height in meters?');
let johnBMI = calBMI(johnMass, johnHeight)
console.log('John alone' + ' ' + johnBMI)
let markBMI = calBMI(markMass, markHeight)
console.log(johnBMI, markBMI)

let isMarkBMIHigher = (markBMI > johnBMI ? `Mark's BMI is higher than John's` : `John's BMI is higher than Mark's`)



console.log(isMarkBMIHigher);

alert(isMarkBMIHigher);
*/


/* part 2
let johnScoreAvg = (1 + 1 + 1) / 3
let mikeScoreAvg = (10 + 10 + 10) / 3
let maryScoreAvg = (10 + 10 + 10) / 3

let winner = johnScoreAvg > mikeScoreAvg && johnScoreAvg > maryScoreAvg ? 'John won' : mikeScoreAvg > maryScoreAvg && mikeScoreAvg > johnScoreAvg ? 'Mike won' : maryScoreAvg > mikeScoreAvg && maryScoreAvg > johnScoreAvg ? 'Mary won' : 'It\'s a draw';
console.log(winner)
alert(winner)
*/


/* part 3
let tipCal = (bill) => {
    if (bill < 50) {
        tips.push(bill * .2)
        billWithTips.push(bill * 1.2)
    } else if (bill >= 50 && bill <= 200) {
        tips.push(bill * .15)
        billWithTips.push(bill * 1.15)
    } else {
        tips.push(bill * .1)
        billWithTips.push(bill * 1.1)
    }
};
let bill = [124, 48, 268];
let tips = [];
let billWithTips = [];

let letsGo = (arr) => {
    arr.map(n => tipCal(n))
    console.log('this is lets go 1:')
    console.log(tips)
    console.log(billWithTips)
};


let letsGo2 = (arr) => {
    for (i of arr) {
        tipCal(i)
        console.log(i)
    }
    console.log('the is lets go 2:')
    console.log(tips)
    console.log(billWithTips)
}

//letsGo(bill);
letsGo2(bill)

//console.log('tips array:' + tips + '  ' + 'Total bill:' + billWithTips)

*/


/*Part 4


let mark = {
    name: 'mark',
    mass: 100,
    height: 1.75,
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};


let john = {
    name: 'john',
    mass: 100,
    height: 1.75,
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};


console.log(john)
console.log(mark)
console.log(john.calBMI() > mark.calBMI() ? 'John\'s BMI is higher' : john.bmi === mark.bmi ? 'Both have same BMI' : 'Mark has a higher BMI')
alert(john.bmi > mark.bmi ? john.name + '\'s BMI is higher at ' + ' ' + john.bmi : john.bmi === mark.bmi ? 'Both have same BMI at ' + john.bmi : mark.name + ' has a higher BMI at' + mark.bmi)

*/



//Part 5

let calAvg = (arr) => {
    let arrTotal = 0;
    for (let i of arr) {
        arrTotal += i
    }
    return arrTotal / arr.length
}

let john = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.billWithTips = [];
        for (let i of this.bills) {
            if (i < 50) {
                this.tips.push(i * .2)
                this.billWithTips.push(i * 1.2)
            } else if (i >= 50 && i <= 200) {
                this.tips.push(i * .15)
                this.billWithTips.push(i * 1.15)
            } else {
                this.tips.push(i * .1)
                this.billWithTips.push(i * 1.1)
            }
        }
    },
}

let mark = {
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.billWithTips = [];
        for (let i of this.bills) {
            if (i < 100) {
                this.tips.push(i * .2)
                this.billWithTips.push(i * 1.2)
            } else if (i >= 100 && i <= 300) {
                this.tips.push(i * .1)
                this.billWithTips.push(i * 1.1)
            } else {
                this.tips.push(i * .25)
                this.billWithTips.push(i * 1.25)
            }
        }
    },
}

john.calcTips()
mark.calcTips()

let johnTipAvg = calAvg(john.tips);
let markTipAvg = calAvg(mark.tips);

console.log('John\'s Tips:')
console.log(john.tips)
console.log('John\'s Bill Totals:')
console.log(john.billWithTips)
console.log('   ')
console.log('Mark\'s Tips:')
console.log(mark.tips)
console.log('Mark\'s Bill Totals:')
console.log(mark.billWithTips)
console.log('John\'s Average Tip:')
console.log(calAvg(john.tips));
console.log('Mark\'s Average Tip:')
console.log(calAvg(mark.tips));
console.log(johnTipAvg > markTipAvg ? 'John left a higher average tip' : johnTipAvg === markTipAvg ? 'Mark and John left the same average tip' : 'Mark left a higher tip average.');