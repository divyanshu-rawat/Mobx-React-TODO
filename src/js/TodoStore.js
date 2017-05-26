import { computed, observable } from "mobx"

class Todo {

  @observable value
  @observable complete

  constructor(value) {
    this.value = value
    this.complete = false
  }
}

export class TodoStore {
  @observable todos = []
  @observable filter = ""

  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter);
    console.log(this.filter);
    console.log(matchesFilter);
    return this.todos.filter(todo => matchesFilter.test(todo.value))
  }

  @computed get completedTodosCount() {
    return this.todos.filter(
    todo => todo.complete === true).length;
  }

  createTodo =  (value) => {
    this.todos.push(new Todo(value))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.filter = ""
    this.todos.replace(incompleteTodos);
  }
}

export default new TodoStore

