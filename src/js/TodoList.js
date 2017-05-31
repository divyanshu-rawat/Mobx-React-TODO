import React from "react"
import { observer } from "mobx-react"


@observer
export default class TodoList extends React.Component {
  createNew(e) {

    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {

    console.log(this.props.store);

    const { clearComplete, filter, filteredTodos, todos } = this.props.store

    const todoList = filteredTodos.map(todo => (
      
      <div class="checkbox">
        <label>
          <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
          <span>  {todo.value}</span>
        </label>
      </div> 
    
    ))
    return <div className = "mainContainer">
      <h4>Todos</h4>
      Add Todo: <input className="new" onKeyPress={this.createNew.bind(this)} />
      Filter: <input className="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoList}</ul>
      <a href="#" onClick={clearComplete} className = "btn btn-primary">Clear Complete</a>

      <div className = "todo_count">
        <p>Completed Todo Count :{this.props.store.completedTodosCount}</p>
      </div>
    </div>
  }
}
