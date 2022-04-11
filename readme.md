### Activating Strict Mode
- `'use strict';` activating strict mode
- Strict Mode:
    - Forbids us from doing certain things
    - Creates visible errors in the developer console.
    - Introduces list of variable names that are reserved for features that may be added to the language later.

## Functions
- Its a piece of code that can be reused over and over again. 
- Parameters are like variables in a function. They are defined once the function is called. 
- They represent input data of the function. 
- Arguments are the actual values of the function parameters. Used to input actual data into functions. 
### Types of Functions
### Function Declaration
- Function that can be used before its declared. 
-  `function functionName(parameters){
    `code to be executed`
   }`
- function declaration can be called earlier before they are declared.
-  `return` function immediately exits after execution. Any code below that is ignored
### Function Expression
- Its a function value stored in a variable. 
-  `const calcAge2 = function(birthYear){// anonymous function
    return 2037- birthYear;
    }// calcAge2 will be the function`
- Function expression cannot be called before initialization.
### Arrow Functions
- `const calcAge3 = birthYear => 2037- birthYear;
   const age3 = calcAge3(1991);
   console.log(age3);`
   - first  `birthYear` is a parameter.

### Arrays
- Arrays can be mutable despite being declared with `const`
- We can add arrays inside other arrays
- We can add variable names inside arrays as if they were an array value.

#### Array Functions
- PUSH METHOD- Adds elements to the end of an array. - `friends.push('Benson');`
- Push method also returns length of an arrays
- unshift() method- Adds elements to the start of an arrays
- unshift() method also returns length of an array
- pop() function returns the popped element
- Returning the index of an array element
- `const indexOfSteve = friends.indexOf('Stephen');`
- `console.log(indexOfSteve);`
- `console.log(friends.indexOf('Bob'));// For elements that do not exist in the array, js returns -1`
##### includes() methods
- `console.log(friends.includes('Stephen'));`
- includes() method checks whether an element exits in an array and return true or false
- includes uses strict equality to perform its check
- If an element in an array is a number, the checking for the same number but as string would return false. 
- It does not do type coercion

## Objects
### Creating an object
- `const benson = {
    firstName: 'Benson',
    lastName:'Makau',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Stephen']
};`
- `console.log(benson);` - Logging the object to console.

### Getting Properties from Objects
#### Method 1: Using Dot Notation
- `console.log(benson.lastName);`- Getting the property `lastName`

#### Method 2: Using Bracket Notation
- `console.log(benson['lastName']);`- Getting the property `lastName`
- Bracket notation allows writing of expressions. 
#### Sample Expression
- `const nameKey = 'Name';`
- `console.log(benson['first' + nameKey]);`
- `console.log(benson['last' + nameKey]);`
    
### Object Methods
- `const benson = {
    firstName: 'Benson',
    lastName:'Makau',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Stephen'],
    hasDriversLicense: true,
    calcAge: function(birthYear){
        return 2037- birthYear;
    }
 };`

- Any function attached to an object is called a Method. 
- Functions are not declared inside object, instead expresions are used.

### For Loop
- Keeps running while the condition is true.
- `for(let rep = 1; rep <=10; rep++){
    console.log(`repetition ${rep}`);
}`
### Continue and break
- Continue- used to exit current iteration and contrinue to the next one
- break- used to completely terminate the whole loop