//functions

//A function is a block of code that performs a specific task.
//Function makes the code reusable. You can declare it once and use it multiple times.
// Functions makes the program easier as each small task is divided into a function.
// Function increases readability 
// DRY - Don't Repeat Yourself 
/* function name (parameterIfAny){
    content of the function}
*/

function greet () {
    console.log('Hello from a function');
}

// to call or execute the function,,,
greet();


//or when our function takes a parameter,
function sayHello(name) {
    console.log (`Hello ${name}`)
}

//to call or execute the function,

sayHello("Precious");


//return keywords in functions
//used when the function is supposed to return a value to the console rather than printing something


// function declaration
function add(x, y){
    return x+y;
}
console.log(add(5, 6));



//function expression
const greetings = function (user) {
    console.log(`Hello ${user}`);
}


//When wwe provide function as an (argument) to another function then that function is known as callback function.
function showCallFunc(fn) {
    const value = 10;
    fn(value)
}

showCallFunc(function (value){
    console.log(value);
});


//------------------Exercise-------------------
//Create a function name (showCallFunc)
// pass "fn" as a parameter
// inside that function, create a variable which holds value of 10
// pass that value to the callback function 
// Now create a callback function & print that value which you pass as parameter to the callback function.

function showCallFunc (fn) {
    const value = 10
    fn (value);
}

showCallFunc(function (value){
    console.log(value);
});