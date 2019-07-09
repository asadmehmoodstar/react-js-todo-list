import React, { Component } from "react";
import TodoItem from "./todoitem";

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        <ul style={{ margin: "0px", padding: "0px", margin: "0 auto" }}>
          {this.props.todos.map((t, i) => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggleComplete={this.props.onToggleComplete}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Todos;
