'use strict';//activating strict mode
/*
// let hasDriversLicense = false;
// const passTest = true;
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can Drive!!');

//sample researved variables
//const interface = 'audio';
//const private = 534;

//Functions
function logger(){
    //Function Body (code executed when the function is called)
    console.log('My name is benson');
}
logger();//Invoking/ Running/ Calling Function

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
// console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

// function calcAge1(birthYear){
// const age = 2037- birthYear;
// return age;
// }

const age1 = calcAge1(1991);//calling function before its declared
//function declaration
function calcAge1(birthYear){
    return 2037- birthYear;
    }
    // const age1 = calcAge1(1991);
//function expression
const calcAge2 = function(birthYear){// anonymous function
    return 2037- birthYear;
    }// calcAge2 will be the function

const age2 = calcAge2(1991);
console.log(age1,age2);

const calcAge3 = birthYear => 2037- birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//Calculate Years Until Retirement
const yearsUntilRetirement = (birthYear, firstName)=> {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

// const benYearsToRetirement = yearsUntilRetirement(2000, "Benson");
console.log(yearsUntilRetirement(2000, "Benson"));
console.log(yearsUntilRetirement(1991, "Bob"));


//Functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples of ${applePieces} pieces of an apple and ${oranges} oranges of ${orangePieces} pieces per orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function(yearofBirth){
    return 2037- yearofBirth;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;// return function immediately exits after execution. Any code below that is ignored
    }else{
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    
}
console.log(yearsUntilRetirement(1991, "Benson"));
console.log(yearsUntilRetirement(1950, "Richy"));

// Arrays
//Creating an Array Method 1
const friends = ['Michael', 'Stephen', 'Peter'];//literal syntax
console.log(friends);
//Creating an Array Method 2
const year = new Array(1991,1984,2008,2020);

//getting Values from an array
console.log(friends[0]);
console.log(friends[2]);
// console.log(year[0]);

console.log(friends.length);
console.log(friends[friends.length-1]);//getting last element in the array

friends[2] = 'James';
console.log(friends);

const firstName = 'Benson';
const benson = [firstName, 'Makau', 2037-1991, 'teaching', friends];
console.log(benson);
console.log(benson.length);

//Exercise
function calcAge(birthYear){
const age = 2037- birthYear;
return age;
}

const years = [1990,1967,2002,2010,2018];
// WE cant Do this
//console.log(calcAge(years));// solution : NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

const ages =[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
// console.log(ages);

//Basic Array Operations(METHODS)
const friends = ['Michael', 'Stephen', 'Peter'];//literal syntax
// Add Elements to the Arrays
//PUSH METHOD- Adds elements to the end of an array
const newLength = friends.push('Benson');
console.log(friends);
console.log(newLength);// Returns Length of an arrays
//unshift() method- Adds elements to the start of an arrays
friends.unshift('John')
console.log(friends);
// const arrayStart = friends.unshift('John');
// console.log(arrayStart);
//unshift() method also returns length of an array

// Removing elements from the array
//Removing last element using pop();- Its the opposite of push
const popped = friends.pop();//Popped Benson
friends.pop();//Popped Peter
console.log(friends);
console.log(popped);
// pop() function returns the popped element

//Using shift() to remove first element of the array
friends.shift();
console.log(friends);

//Returning the index of an array element
const indexOfSteve = friends.indexOf('Stephen');
console.log(indexOfSteve);
console.log(friends.indexOf('Bob'));// For elements that do not exist in the array, js returns -1

//includes() function
console.log(friends.includes('Bob'));
console.log(friends.includes('Stephen'));
// includes() method checks whether an element exits in an array and return true or false

// includes() function uses strict equality to check for a match on an element
// Assume we push a number 23
friends.push(23);
//then check for the '23' string, it would get false
console.log(friends.includes('23'));
//Using includes() in writing conditionals
if(friends.includes('Michael')){
    console.log('You have a friend named Michael');
}else{
    console.log("You have no friend named Michael");
}

//Arrays Coding Challenge
function calcTip(bill){
    let tip = 0;
if(bill<=50 && bill <= 300){
    tip = (15/100) * bill;
}else{
    tip = (20/100)*bill;
}
return tip;
}
console.log(`The customer is supposed to leave a tip of ${calcTip(1000)}`);

//Question 2
const bills =[125,555,44];
const tip1 = bills[0]*0.15;
const tip2 = bills[1]*0.20;
const tip3 = bills[2]*0.20;
const tips =[];
tips.push(tip1);
tips.push(tip2);
tips.push(tip3);
console.log(`This is a list of tips ${tips}`);

const total = [];
const total1 = bills[0] + tip1;
const total2 = bills[1] + tip2;
const total3 = bills[2] + tip2;
total.push(total1);
total.push(total2);
total.push(total3);
console.log(`These are the totals ${total}`);

//Method 2
const calcTip = function(bill){
    return bill >=50 && bill <= 300 ? bill = 0.15*bill : 0.20*bill;
}
//Arrow Function
// const calcTip = bill => bill >=50 && bill <= 300 ? bill = 0.15*bill : 0.20*bill;

const bills =[125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills, tips, totals);

//Javascript Objects.
const benson = {
    firstName: 'Benson',
    lastName:'Makau',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Stephen']
};
console.log(benson);
//The Object above contains 5 keys with each key having a value.
// A key is also called property.
// This way of creating objects using curly brackets ({}) is known as the  object literal syntax
// We use objects to group variables that are similaror related

// Getting Properties from Objects
// Method 1: Using Dot Notation
console.log(benson.lastName);// Getting the property `lastName`
//Method 2: Using Bracket Notation
console.log(benson['lastName']); //Getting the property `lastName`

//Sample Expression
const nameKey = 'Name';
console.log(benson['first' + nameKey]);
console.log(benson['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Benson? Choose between firstName, lastName, age,job and friends");
// console.log(interestedIn);
if(benson[interestedIn]){
    console.log(`The result is: ${benson[interestedIn]}`);
}else{
    console.log("Wromg request! Please Choose between firstName, lastName, age,job and friends");
}

benson.location ='kenya';
benson['github'] = 'makaubenson';
console.log(benson);

console.log(`${benson.firstName} has ${benson.friends.length} friends and his best friend is ${benson.friends[0]}`);

//Object Methods
const benson = {
    firstName: 'Benson',
    lastName:'Makau',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Stephen'],
    hasDriversLicense: true,
    // calcAge: function(birthYear){
    //     return 2037- birthYear;
    // }
    // calcAge: function(birthYear){
    //     console.log(this);// Logs the whole benson object
    //     return 2037- this.birthYear;// Accessing birthYear property from the same object the method resides
    // }
    calcAge: function(birthYear){
       this.age = 2037- this.birthYear; // Creating new property in benson object
        return this.age;
    },
    // Challenge: CReate a function that summaries Benson's object information
    //Method !
//     getSummary: function(){
//     let statement ="";
//     if(this.hasDriversLicense){
//         statement = ", and has a driver's license.";
//     }else{
//         statement =", and does not have a driver's license.";
//     }
//     const summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job} ${statement}`;
//     return summary;
// }
//Method 2
getSummary: function(){
  
    const summary = `${this.firstName} is a ${this.calcAge()} year old ${this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    return summary;
}
};
// console.log(benson);
// Any function attached to an object is called a Method. 
// Functions are not declared inside object, instead expresions are used.
console.log(benson.calcAge());
console.log(benson.age);
console.log(benson);
// console.log(benson['calcAge'](1991));

console.log(benson.getSummary());

const mark = {
fullName:"Mark Miller",
mass:78,
height:1.69,
calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
    }
};
const john = {
fullName:"John Smith",
mass:92,
height:1.95,
calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI , john.BMI);// For this to work, the method calcBMI() had to be called
console.log(`John's BMI is: ${john.calcBMI()}`);
console.log(`Mark's BMI is: ${mark.calcBMI()}`);
if(mark.BMI > john.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is greater than ${john.fullName}'s BMI (${john.BMI}).`);
}else{
    console.log(`${john.fullName}'s BMI (${john.BMI}) is greater than ${mark.fullName}'s BMI (${mark.BMI}).`);
}
*/


// The For Loop
for(let rep = 1; rep <=10; rep++){
    console.log(`repetition ${rep}`);
} 