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
input: a number (`start`)
output: a function - (finish) => counts up or down from first number to
  second number, logging each number to the console (including both
  input numbers)

- Return a function expression:
  - Takes one argument, `finish`
  - Prints each number in range [`start`, `finish`]
  - If `finish` > `firststartNumber`, will need to increment current number,
    else will need to decrement

*/

function makeCounterLogger(start) {
  return (finish) => {
    if (finish > start) {
      for (let number = start; number <= finish; number += 1) {
        console.log(number);
      }
    } else {
      for (let number = start; number >= finish; number -= 1) {
        console.log(number);
      }
    }
  };
}

//

let countlog = makeCounterLogger(5);

countlog(8);
countlog(2);
