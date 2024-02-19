// Write a function that prints the numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Check if the number is a multiple of both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Check if the number is a multiple of 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Check if the number is a multiple of 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // For other numbers, simply print the number itself
        else {
            console.log(i);
        }
    }
}

// Example usage:
fizzBuzz(15); // Output: Prints the FizzBuzz sequence from 1 to 15
