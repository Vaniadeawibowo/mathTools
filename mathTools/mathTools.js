// mathTools.js

// 1. Factorial using recursion
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1); // recursive call
}

// 2. Prime number checker (isPrime) using number theory and loop
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// 3. Fibonacci using recursion
function fibonacci(n) {
  if (n < 0) return undefined;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive call
}

// Export only two functions
module.exports = {
  factorial,
  isPrime
  // fibonacci is not exported
};
