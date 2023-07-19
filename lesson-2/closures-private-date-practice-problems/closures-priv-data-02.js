// In this problem, we'll build a simple todo list program that uses the
// techniques we've seen in this assignment.

// Write a makeList function that creates and returns a new function that
// implements a todo list. The returned function should have the following
// behavior:

// - When called with an argument that is not already on the list, it adds
//   that argument to the list.
// - When called with an argument that is already on the list, it removes the
//   element from the list.
// - When called without arguments, it prints all of the items on the list.
// - If the list is empty, it prints an appropriate message.

//

// > let list = makeList();
// > list();
// The list is empty.

// > list("make breakfast");
// make breakfast added!

// > list("read book");
// read book added!

// > list();
// make breakfast
// read book

// > list("make breakfast");
// make breakfast removed!

// > list();
// read book

//

// 1. Putting all functionality inside returned function
function makeList() {
  let list = [];

  return (todo) => {
    if (todo === undefined) {
      if (list.length === 0) {
        console.log("The list is empty.");
      } else {
        list.forEach((todo) => console.log(todo));
      }
      return;
    }

    let index = list.indexOf(todo);

    if (index === -1) {
      list.push(todo);
      console.log(`${todo} added!`);
    } else {
      list.splice(index, 1);
      console.log(`${todo} removed!`);
    }
  };
}

// 2. Moving logic to separate functions included in the closure
function makeList2() {
  let list = [];

  let printTodos = function() {
    if (list.length === 0) {
      console.log("The list is empty.");
    } else {
      list.forEach((todo) => console.log(todo));
    }
  };

  let removeTodo = function(todo) {
    let index = list.indexOf(todo);
    list.splice(index, 1);
    console.log(`${todo} removed!`);
  };

  let addTodo = function(todo) {
    list.push(todo);
    console.log(`${todo} added!`);
  };

  return (todo) => {
    if (todo === undefined) {
      printTodos();
    } else if (list.includes(todo)) {
      removeTodo(todo);
    } else {
      addTodo(todo);
    }
  };
}

//

let list = makeList();
list();

list("make breakfast");
list("read book");

list();

list("make breakfast");

list();

/* eslint max-lines-per-function: */
