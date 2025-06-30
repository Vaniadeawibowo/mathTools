// index.js

// Import the factorial and isPrime functions from the mathTools module
const { factorial, isPrime } = require('./mathTools');

// Get the number argument from the command line
const arg = process.argv[2];
const num = parseInt(arg);

// Check if the input is a valid number
if (isNaN(num)) {
  console.log("Please enter a valid number.");
} else {
  console.log(`Factorial of ${num}:`, factorial(num));
  console.log(`Is ${num} prime?:`, isPrime(num));
}
