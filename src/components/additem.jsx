import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      id: "",
      title: "",
      completed: false
    };

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <div style={addItemContainer}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            style={searchInput}
            name="title"
            value={this.state.title}
            placeholder="Enter todo item to add"
            onChange={this.handleChange}
            required
          />
          <button type="submit" style={{ width: "18%" }}>
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const addItemContainer = {
  background: "#F4F4F4",
  padding: "2px 3px 3px 3px",
  marginBottom: "2px"
};

const searchInput = {
  width: "80%"
};

export default AddItem;
