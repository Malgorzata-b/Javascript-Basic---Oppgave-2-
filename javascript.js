/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
// The getnumber function takes a number as input and returns
// a message indicating whether the number is even or odd.
// It uses the modulo operator to determine the parity of the number.
function getNumber(number) {
  return number % 2 === 1 ? "Number is odd" : "Number is even";
}

console.log(getNumber(33));
/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
// The getText function takes a string as input, converts it to uppercase, and adds an exclamation mark at the end.
// It returns the modified string, which is then logged to the console.
function getText(text) {
  return `${text.toLocaleUpperCase()}!`;
}

console.log(getText("This is cool"));

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/
// The welcome function takes two parameters: a name (name) and
// an hour of the day (hour).

function welcome(name, hour) {
  if (hour <= 0 || hour > 23) {
    return "Invalid time!";
  } else if (hour <= 5) {
    return `Good night ${name}`;
  } else if (hour <= 11) {
    return `Good morning ${name}`;
  } else if (hour <= 17) {
    return `Good day ${name}`;
  } else if (hour >= 18) {
    return `Good evening ${name}`;
  } else {
    return `Error!`;
  }
}
console.log(welcome("Gosia", -1));
console.log(welcome("Joe", 3));
console.log(welcome("Ask", 7));
console.log(welcome("Endre", 14));
console.log(welcome("Gulshan", 18));
console.log(welcome("Louis", 24));

/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

// Function that modifies an array and logs the result
function getArray(array) {
  array.shift();
  array.pop();
  return array;
}
console.log(getArray(["Joe", "Ask", "Endre", "Gulshan"]));

/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

// Function that modifies text and returns the result

const getResult = function (text) {
  // Replaces "hard" with "fun" and trims extra spaces

  return text.replace("hard", "fun").trim();
};

console.log(getResult("    My new challenge is hard.   "));

/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

//That methods to get a modified list of heroes

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];
console.log(heroes);

// - Remove the first hero of the array (Spider-Man)
heroes.shift();
console.log(heroes);

//  - Replace "Doctor Strange" with "Skrull"
heroes.splice(2, 1, "Skrull");
console.log(heroes);

// - Use the splice method to remove Thor and Hulk and add "Captain America"
heroes.splice(0, 2, "Captain America");
console.log(heroes);

// - Join the array to a string with "💪" between each hero

console.log(heroes.join("💪"));
// return getIt.split(",").join("💪");

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

// Function to process different types of parameters
function getParameter(parameter) {
  const parameterType = typeof parameter;
  if (parameterType === "string") {
    return `😎${parameter}😎`;
  } else if (parameterType === "number") {
    const fullParameter = parameter ** 2;
    return `😎 ${fullParameter}😎`;
  } else if (parameterType === "boolean") {
    return `😎 ${parameter ? "Yeah" : "Chill"}😎`;
  } else if (parameter === null) {
    return `😎Primitive values only😎`;
  } else {
    return `😎Primitive values only😎`;
  }
}

console.log(getParameter(4));
console.log(getParameter(true));
console.log(getParameter(false));
console.log(getParameter(null));
// console.log([
//   "Spider-Man",
//   "Thor",
//   "Hulk",
//   "Doctor Strange",
//   "Iron Man",
//   "Black Widow",
// ]);

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/
