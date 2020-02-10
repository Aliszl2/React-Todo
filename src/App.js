import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      
      todoList: [
        { id: "1", task: "sweeping", completed: false },
        { id: "2", task: "mopping", completed: false },
        { id: "3", task: "washing dishes", completed: false }
      ],

      todoValue: ""
    };

  }
  render(){
    return (
      <div>
        <h2>Todo list</h2>
       
        <TodoList
            key={this.props.id}
            todoList={this.state.todoList}
             todoValue={this.state.todoValue} 
        />


      </div>
    );
  }

}

export default App;
