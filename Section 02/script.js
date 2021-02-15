'use strict';

/*
function fruitProcessor (apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleAndOrangeJuice = fruitProcessor(2,4);
console.log(appleAndOrangeJuice);



const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {

    const retirement = 65 - calcAge3(birthYear);
    return `${firstName} will take his retirement in ${retirement}`;
}

console.log(yearsUntilRetirement(1994, 'Houssem'));
console.log(yearsUntilRetirement(1991, 'Jonas'));



const cutPieces = function(fruit){
    return fruit* 4;
}

function fruitProcessor (apples, oranges){

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 4));


// coding challenge 01


const calcAverrage = (S1, S2, S3) => {
    const avg = (S1 + S2 + S3) / 3;
    return avg;
}

const checkWinner = (dolphines, koalas) => {
    if (dolphines >= 2*koalas){
        return `Dolphines win (${dolphines} vs. ${koalas})`;
    }else if(koalas >= 2*dolphines){
        return `Koalas win (${koalas} vs. ${dolphines})`;
    }else {
        return `There is no winner`;
    }
}

const avgDolphins1 = calcAverrage(44, 23, 71);
const avgKoalas1 = calcAverrage(65, 54, 49);

const avgDolphins2 = calcAverrage(85, 54, 41);
const avgKoalas2 = calcAverrage(23, 34, 27);

console.log(`TEST DATA 1: DOLPHINES ${avgDolphins1} KOALAS ${avgKoalas1}`);
console.log(`TEST DATA 2: DOLPHINES ${avgDolphins2} KOALAS ${avgKoalas2}`);

console.log(checkWinner(avgDolphins1, avgKoalas1));
console.log(checkWinner(avgDolphins2, avgKoalas2));



// Arrays


const calcAge3 = birthYear => 2037 - birthYear;

const firstName = 'Houssem';
const friends = ['Joe', 'Mark', 'Bob'];
const years = [1991, 2000, 1999, 2004, 1994];

const houssem = [firstName, 'BOUBAKOUR', calcAge3(1994), friends];

console.log(houssem);


const ages = [calcAge3(years[0]), calcAge3(years[1]), calcAge3(years[years.length - 1])];
console.log (ages);



const calcTip = (bill) => {
    let tip;
    if (bill >= 50 && bill <= 200){
        tip = bill * 15 / 100;
    }else {
        tip = bill * 20 / 100;
    }
    return tip;
}

console.log (calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])] ;

console.log (bills, tips);

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(total);




// Objects

const houssem = {
    firstName : 'Houssem',
    lastName : 'BOUBAKOUR',
    age : 2037 - 1994,
    job : 'Student',
    friends : ['Joe', 'Bob', 'Vivian']
};


const intrestedIn = prompt ('What do you wanna know about Houssem ? Choose between firstName, lastName, age, job and friends');

console.log(houssem[intrestedIn]);

if (intrestedIn === 'friends'){
    console.log(`${houssem.firstName} has ${houssem.friends.length} friends and his best friend is called ${houssem.friends[0]}.`);
}



const houssem = {
    firstName : 'Houssem',
    lastName : 'BOUBAKOUR',
    year : 1994,
    job : 'Student',
    friends : ['Joe', 'Bob', 'Vivian'],
    hasDriversLicense: true,

    calcAge: function (birthYear){
        return 2037 - birthYear;
    },
    getSummary: function(){
        return `${this.firstName} ${this.lastName} is born in ${this.year}, he's a ${this.job}, his friends are ${this.friends[0]}, ${this.friends[1]} and ${this.friends[2]}, does he have a driver's license ? ${this.hasDriversLicense}`;
    }
};

console.log(houssem.calcAge(houssem.year));

console.log(houssem.getSummary());

//console.log(calcAge(houssem['year']));




// Coding Challenge 03



const mark = {
    
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,

    calcBMI: function(){

        return this.weight/(this.height*this.height);
        
        }
};

const john = {

    fullName: 'John Smith',
    height: 1.95,
    weight:92,

    calcBMI: function(){

        return this.weight/(this.height*this.height);

    
    }
};

    if(john.calcBMI()> mark.calcBMI()){
        console.log(
            `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`
        );
    }else{
        console.log(
            `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`
            );
    }
    




// loops

for (let rep = 1; rep <= 10; rep++){

    console.log(`Lifting weights repetition ${rep}`);

}



// Loop backwards

const houssem = [
    'Houssem',
    'BOUBAKOUR',
     1994,
    'Student',
    ['Joe', 'Bob', 'Vivian']
    
];

for (let i = houssem.length-1; i>=0 ; i--){
    console.log(i, houssem[i]);
};

// loop in a loop

for(let exercice = 1; exercice <=3; exercice++ ){
    console.log(`-------- Starting exercice ${exercice}`);

    for(let repetition = 1; repetition <=5; repetition++){
        console.log(`Exercice ${exercice}: Lifting weight repitition ${repetition}`);
    }
}



// While loop

let rep =1;
while (rep <= 10){
    console.log(`Lifting weight repitition ${rep}`);
    rep++;
} 


let dice = Math.trunc (Math.random()*6) + 1;

while (dice!==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc (Math.random()*6) + 1;

    if(dice === 6) console.log (`The loop is about to end...`);
}



// Coding challenge 04

//1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2
const tips = []; 
const total = [];

//3
const calcTip = (bill) => {
    let tip;
    if (bill >= 50 && bill <= 200){
        tip = bill*0.15;
    }else{
        tip = bill*0.2;
    }
    return tip;
} 

for(let i = 0; i <= bills.length-1; i++){
    tips.push(calcTip(bills[i]));
}

for(let i = 0; i<=bills.length-1; i++){
    total.push(bills[i]+tips[i]);
}

console.log(bills, tips, total);

const calcAverage = (arr)=>{
    let sum = 0;
    for (let i = 0; i<= arr.length-1; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}         

console.log(calcAverage(bills),calcAverage(tips),calcAverage(total));
*/

