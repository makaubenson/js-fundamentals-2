'use strict';//activating strict mode
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
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);