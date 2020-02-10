import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  render() {
    return (
      <>
        <div>{` ${this.props.todo.task}`}</div>
        <button>Mark as complete</button>
        <button>{"\u0078"}</button>
      </>
    );
  }
}
