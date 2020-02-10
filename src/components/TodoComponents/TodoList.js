// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import uuid from 'uuid';

export default class TodoList extends React.Component {
  
  render() {
 
    return (
    
      <>
        <TodoForm 
        handleInputChange={this.props.handleInputChange}
        handleTodoSubmit={this.props.handleTodoSubmit}
        />
   
       {this.props.todoList.map(todo=>{
            return(
                <Todo 
                key={todo.id}
                todo={todo}
                markCompleted={this.props.markCompleted}
                
                />
            )
        })} 
      </>
    );
    // map over array here.  Like with cards and conatiners
  }
}
