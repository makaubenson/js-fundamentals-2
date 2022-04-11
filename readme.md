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
    
