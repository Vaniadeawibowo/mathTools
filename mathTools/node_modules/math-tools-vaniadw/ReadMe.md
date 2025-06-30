Math Tools - Node.js Project

This project is a simple demonstration of modular JavaScript using Node.js. It includes two main files: mathTools.js and index.js. The goal is to perform basic mathematical operations such as calculating factorials and checking if a number is prime.

In the mathTools.js file, two functions are defined: factorial(n) and isPrime(n). The factorial function uses recursion, which means it calls itself to solve smaller parts of the problem. You can imagine this like wearing layers of clothing – you can't put on your coat until you've put on your shirt, and so on. So factorial(5) calls factorial(4), then factorial(3), and continues until it reaches factorial(0), which returns 1. That return value is then multiplied back up the stack.

The isPrime(n) function uses basic number theory and looping logic. It checks whether a number can be evenly divided by any number other than 1 and itself. This process is like a strict entry test to a private club – only special numbers with no other divisors are allowed. To optimize performance, the function only checks up to the square root of the number.

Once the functions are created, they are exported using module.exports. You can think of this as packing only the necessary items into a suitcase. Even though you have many tools in your house (the module), you only pack (export) the ones you need for your trip (the main file). In this case, only factorial and isPrime are exported, while other functions like fibonacci remain inside the module.

The index.js file acts as the main program. It reads a number from the terminal using process.argv, checks whether the input is a valid number, and then uses the imported functions from mathTools.js to calculate and display the factorial and check for primality.

Additionally, the project includes package.json and package-lock.json. These are automatically generated when you run npm init. The package.json file is like your project profile or travel plan – it lists the project’s name, version, and dependencies. Meanwhile, package-lock.json is a detailed log of the exact versions of packages that were installed, ensuring that the project remains consistent across different environments.

To run the program, use the command:
node index.js <number>

For example:
node index.js 5

Expected output:
Factorial of 5: 120
Is 5 prime?: true

This project shows how to structure simple Node.js apps using modular code, recursion, and command-line input. It also demonstrates good practices such as separating logic into modules and managing your project with npm.