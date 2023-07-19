// Improving the API

// Let's take another look at the makeList function we wrote in the last
// practice problem.
// Our solution provides a concise but somewhat unclear interface for
// developers:

// > let list = makeList();
// > list("make breakfast");       // add an item to the list
// make breakfast added!

// > list();                       // log the list's items
// make breakfast

// > list("make breakfast");       // remove an item from the list
// make breakfast removed!

// > list();
// The list is empty.

// The function returned by makeList lets the user perform three different
// actions (adding, removing, and listing) by calling the function with
// appropriate arguments. It works, but the interface isn't clear.
// Astonishingly, the single call list('make breakfast') performs two
// entirely different operations based on the current state of the list!

// We can improve the interface by returning an Object from makeList instead of
// a function. That lets us create an API that is easy to use and understand:

// > let list = makeList();
// > list.add("peas");
// peas added!

// > list.list();
// peas

// > list.add("corn");
// corn added!

// > list.list();
// peas
// corn

// > list.remove("peas");
// peas removed!

// > list.list();
// corn

// Modify the makeList function so that it returns an object that provides the
// interface shown above, including add, list, and remove methods.

//

function makeList() {
  return {
    items: [],

    list() {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach((item) => console.log(item));
      }
    },

    add(item) {
      let index = this.items.indexOf(item);
      if (index === -1) {
        this.items.push(item);
        console.log(`${item} added!`);
      }
    },

    remove(item) {
      let index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },
  };
}

//

let list = makeList();
list.add("peas");
list.list();

list.add("corn");
list.list();

list.remove("peas");
list.list();

/* eslint max-lines-per-function: */
