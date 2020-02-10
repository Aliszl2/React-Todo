import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        <TodoForm
          handleInputChange={this.props.handleInputChange}
          handleTodoSubmit={this.props.handleTodoSubmit}
        />

        {this.props.todoList.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              markComplete={this.props.markComplete}
              delTodo={this.props.delTodo}
            />
          );
        })}
      </>
    );
  }
}
