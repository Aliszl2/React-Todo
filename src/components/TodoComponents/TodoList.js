// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
  
  render() {
 
    return (
    
      <>
        <TodoForm />
   
       {this.props.todoList.map(todo=>{
            return(
                <Todo
                key={todo.id}
                todo={todo}
                />
            )
        })} 
      </>
    );
    // map over array here.  Like with cards and conatiners
  }
}
