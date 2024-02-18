// Task: Calculate Factorial Using Recursion

// Write a JavaScript function called factorial that takes a positive integer n as input and calculates the factorial of n using recursion. The factorial of a number n, denoted as n!, is the product of all positive integers less than or equal to n.


function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: factorial of n is n times factorial of (n - 1)
    return n * factorial(n - 1);
}