import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
    render() {
      return (
          <>
            <div>{`${this.props.todo.id} ${this.props.todo.task}`}</div>
          </>
      )
    }
}