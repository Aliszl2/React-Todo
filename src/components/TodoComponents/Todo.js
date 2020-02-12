import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      color: this.props.todo.completed ? "red" : "green"
    };
  };
 

  render() {
    return (
      <>
        <div style={this.getStyle()} >{`${this.props.todo.task} `}</div>
        <button onClick={() => this.props.markComplete(this.props.todo.id)}>
          Mark as complete
        </button>
        <button onClick={() => this.props.delTodo(this.props.todo.id)}>
          {"\u0078"}
        </button>
      </>
    );
  }
}
