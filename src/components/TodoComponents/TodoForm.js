import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="add todo"
          type="text"
          onChange={this.props.handleInputChange}
        />
        <button onClick={this.props.handleTodoSubmit} type="submit">
          Add Todo
        </button>
      </div>
    );
  }
}
