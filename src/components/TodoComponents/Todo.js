import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  render() {
    return (
      <>
        <div className="notCompleted">{` ${this.props.todo.task}`}</div>
        <button
        onClick={this.props.markCompleted}
               >Mark as complete</button>
        <button
        
        >{"\u0078"}</button>
      </>
    );
  }
}
