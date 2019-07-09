import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <React.Fragment>
        <li
          style={
            this.props.todo.completed ? listItemStylesCompleted : listItemStyles
          }
        >
          <input
            type="checkbox"
            onChange={() => this.props.onToggleComplete(this.props.todo.id)}
          />{" "}
          {this.props.todo.title}
          <button
            title="Click to delete"
            onClick={() => this.props.onDelete(this.props.todo.id)}
            style={btnStyle}
          >
            X
          </button>
        </li>
      </React.Fragment>
    );
  }
}

const listItemStyles = {
  background: "#F4F4F4",
  listStyle: "none",
  marginBottom: "1px",
  padding: "5px"
};

const listItemStylesCompleted = {
  background: "#F4F4F4",
  listStyle: "none",
  marginBottom: "1px",
  padding: "5px",
  textDecoration: "line-through"
};

const btnStyle = {
  background: "#FF0000",
  color: "#FFF",
  border: "none",
  borderRadius: "50%",
  padding: "2px 5px",
  fontSize: "11px",
  marginLeft: "5px",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
