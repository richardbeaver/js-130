/*

Starting on a todo list project

Contains 2 classes:
- `TodoList`
- `Todo`

`TodoList` objects contain a collection (here, an array) of `Todo` objects

The `Todo` class is given and is below:

*/

// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the todo
// item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add Todo objects");
    }

    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every((todo) => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map((todo) => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    // Instead of using `Array.prototype.filter`, use the
    // `TodoList.prototype.forEach` method we defined above
    // If we change from an array for `todos`, we only need to update `forEach`

    // Also returning a new `TodoList` object so that we can chain `TodoList`
    // methods together
    let newList = new TodoList(this.title);

    this.forEach((todo) => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });

    return newList;
  }

  // Some more methods that can use the new `filter` and `forEach`:

  findByTitle(title) {
    return this.filter((todo) => todo.getTitle() === title).first();
  }

  // Return a new `TodoList` object that contains all of the done todos
  allDone() {
    return this.filter((todo) => todo.isDone());
  }

  allNotDone() {
    return this.filter((todo) => !todo.isDone());
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo !== undefined) {
      todo.markDone();
    }
  }

  markAllDone() {
    this.forEach((todo) => todo.markDone());
  }

  markAllUndone() {
    this.forEach((todo) => todo.markUndone());
  }

  toArray() {
    // Could make this method simply: `return this.todos.slice()`
    // Instead, using the class' `forEach` method to iterate through todos
    // to create the new array
    let todos = [];

    this.forEach((todo) => {
      todos.push(todo);
    });

    return todos;
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
}
