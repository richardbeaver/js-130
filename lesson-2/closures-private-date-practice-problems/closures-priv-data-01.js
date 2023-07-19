// Create a function named makeCounterLogger that takes a number as an
// argument and returns a function. When we invoke the returned function
// with a second number, it should count up or down from the first number
// to the second number, logging each number to the console:

// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8

// > countlog(2);
// 5
// 4
// 3
// 2

/*
input: a number (`firstNumber`)
output: a function - (secondNumber) => counts up or down from first number to
  second number, logging each number to the console (including both
  input numbers)

- Return a function expression:
  - Takes one argument, `secondNumber`
  - Prints each number in range [`firstNumber`, `secondNumber`]
  - If `secondNumber` > `firstNumber`, will need to increment current number,
    else will need to decrement

*/

// 1. One `while` loop that contains an `if/else` statement to determine
//    reassignment of `currentNumber`
function makeCounterLogger(firstNumber) {
  return (secondNumber) => {
    let currentNumber = firstNumber;

    do {
      console.log(currentNumber);
      if (secondNumber > firstNumber) {
        currentNumber += 1;
      } else {
        currentNumber -= 1;
      }
    } while (currentNumber !== secondNumber);

    console.log(secondNumber);
  };
}

// 2. Two separate `while` loops in each branch of an `if/else` statement
function makeCounterLogger2(firstNumber) {
  return (secondNumber) => {
    let currentNumber = firstNumber;

    if (secondNumber > firstNumber) {
      while (currentNumber <= secondNumber) {
        console.log(currentNumber);
        currentNumber += 1;
      }
    } else {
      while (currentNumber >= secondNumber) {
        console.log(currentNumber);
        currentNumber -= 1;
      }
    }
  };
}

//

let countlog = makeCounterLogger(5);

countlog(8);
countlog(2);

/* eslint no-unused-vars: */
