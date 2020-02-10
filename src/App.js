import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import uuid from 'uuid';

 const initialTodos = [
  { id: uuid(), task: "learn class components", completed: false },
  { id: uuid(), task: "revise classes", completed: false },
  { id: uuid(), task: "Clean garage doors", completed: false }
 ]

//  const fakeAxios = () => {
//   return Promise.resolve(initialTodos);
// };
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: initialTodos,
      todoValue: ""
    };
  }
  // componentDidMount() {
  //  fakeAxios().then(todos=>{
  //    this.setState(initialstate =>{
  //      return{


  //      }
  //    })
  //  })
  // }

  handleInputChange = event =>{
     console.log("field click",event.target.value);
    //      this.setState({ todoValue: event.target.value,
    // })
  }
  // handleInputChange = event =>{
  //       console.log("click");
  //   this.setState({ todoValue: event.target.value,
  //   })
  // }
  // handleInputChange = event =>{
  //   const newValue = event.target.value;
  //   console.log('the newValue of the input', newValue);
  //   this.setState(oldstate=>{ 
  //     return{
  //       todoValue: newValue,
  //   })
  // }

  render(){
    return (
      <div>
        <h2>Todo list</h2>
       
        <TodoList
            key={this.props.id}
            todoList={this.state.todoList}
             todoValue={this.state.todoValue} 
             handleInputChange={this.handleInputChange}
        />


      </div>
    );
  }

}

export default App;
