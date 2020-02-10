import React from "react";

export default class TodoForm extends React.Component {

    render() {
        return(
<form action="">
<input
 placeholder="add todo"
  type="text"
  onChange={this.props.handleInputChange}
  />
<button>Add Todo</button>


</form>

        );
    }


}