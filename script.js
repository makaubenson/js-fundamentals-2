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
*/
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