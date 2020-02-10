import React from "react";

export default class TodoForm extends React.Component {

    render() {
        return(
<form action="">
<input placeholder="add todo" type="text"/>
<button>Submit Todo</button>
<button>Mark as complete</button>
<button>{"\u0078"}</button>

</form>

        );
    }


}