//Countdown Timer: Create a countdown timer that counts down from a specified number and logs each second.
// let counter = 0;
// let num = +prompt("What is the value?");

// const interval = setInterval(() => {
//     if (counter >= num) {
//         clearInterval(interval);
//         console.log("Countdown finished!");
//     } else {
//         console.log(num - counter);
//         counter++;
//     }
// }, 1000);


//Number Pyramid: Write a program that uses nested loops to create a pyramid of numbers (e.g., for 5 levels: 1, 1 2, 1 2 3, etc.).

// let numlevel = 5;

// for (let i = 1; i <= numlevel; i++) {
//     // Print leading spaces for pyramid shape
//     let spaces = ' '.repeat(numlevel - i);
//     let line = spaces; // Start with spaces

//     // Generate numbers in the current row
//     for (let j = 1; j <= i; j++) {
//         line += j + ' '; // Add numbers with space
//     }

//     console.log(line.trim()); // Trim the trailing space and print the line
// }


//FizzBuzz Variation: Modify the FizzBuzz challenge to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both up to 100, but use a loop that iterates backward from 100 to 1.

// for (let i = 100; i >= 0; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }  // End if-else statement
// }

//Table of Squares: Create a program that prints a table of squares for the numbers 1 through 10.

// let i = 0;
// while (i < 11) {
//     let square = i * i;
//     console.log(`${i} squared is ${square}`);
//     i++; // Increment i by 1
// }

//Character Frequency: Given a string, use a loop to count the frequency of each character and log the results.

// let String = "Hello how are you?"
// let count = 0;

// for (let i = 0; i < String.length; i++) {
//     if (String[i] === ' ') {
//         continue
//     } else {
//         count++;
//     }
// }

// console.log(`The string has ${count} characters.`);

//Even and Odd Arrays: Use a loop to separate an array of numbers into even and odd arrays.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = []
// let odd = []
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         even.push(numbers[i]);
//     } else {
//         odd.push(numbers[i]);
//     }
// }

//Prime Number Checker: Create a function that checks if a number is prime, using a loop to test divisibility.

// function primeCheck(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

//Cumulative Sum: Write a program that takes an array of numbers and returns a new array containing the cumulative sum.

// let numbers = [1, 2, 3, 4, 5];

// let cumulativeSum = [];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     cumulativeSum.push(sum);
// }

// console.log(cumulativeSum);

//Reverse a String: Use a loop to reverse a string without using built-in methods.

// String = "hello who is there?"

// let reversedString = "";

// for (let i = String.length - 1; i >= 0; i--) {
//     reversedString += String[i];
// }

//  ---------------------------------------------------------------------------------

//Advance One

//Pattern Drawer: Create a program that uses loops to draw different shapes (like triangles, squares, or diamonds) in the console based on user input.

// const height = 5; // Height of the box

// for (let i = 1; i <= height; i++) {
//     if (i === 1 || i === height) {
//         // Print the top and bottom borders of the box
//         console.log('|' + '"'.repeat(4) + '|'); // Adjust the number of spaces as needed
//     } else {
//         // Print the sides of the box for the middle rows
//         console.log('|' + ' '.repeat(4) + '|'); // Again, adjust spaces as needed
//     }
// }


//Write a program that builds a simple story by looping through an array of sentence fragments and combining them into a full narrative.