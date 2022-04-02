### Activating Strict Mode
- `'use strict';` activating strict mode
- Strict Mode:
    - Forbids us from doing certain things
    - Creates visible errors in the developer console.
    - Introduces list of variable names that are reserved for features that may be added to the language later.

### Functions
- Its a piece of code that can be reused over and over again. 
- Parameters are like variables in a function. They are defined once the function is called. 
- They represent input data of the function. 
### Function Declaration
-  `function functionName(parameters){
    `code to be executed`
   }`
- function declaration can be called earlier before they are declared.
### Function Expression
-  `const calcAge2 = function(birthYear){// anonymous function
    return 2037- birthYear;
    }// calcAge2 will be the function`
- Function expression cannot be called before initialization.
### Arrow Functions
- `const calcAge3 = birthYear => 2037- birthYear;
   const age3 = calcAge3(1991);
   console.log(age3);`
   - first  `birthYear` is a parameter.
    
