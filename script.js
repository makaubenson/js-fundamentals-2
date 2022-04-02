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
*/
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