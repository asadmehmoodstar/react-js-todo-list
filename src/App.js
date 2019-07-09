import React, { Component } from "react";
import Todos from "./components/todos";
import AddItem from "./components/additem";
import NavBar from "./components/navbar";
import About from "./components/about";
import axios from "axios";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    todos: []
  };

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(json => this.setState({ todos: json }));
  }

  handleToggleComplete = itemId => {
    const todos = this.state.todos.map(t => {
      if (t.id === itemId) {
        t.completed = !t.completed;
      }
      return t;
    });
    this.setState({ todos });
  };

  handleSubmit = data => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", data)
      .then(response => response.data)
      .then(data => this.setState({ todos: [...this.state.todos, data] }))
      .catch(function(error) {
        console.log(error);
      });
  };

  handleDelete = itemId => {
    axios
      .post(`https://jsonplaceholder.typicode.com/todos/${itemId}`)
      .then(response => response.data)
      .then(data =>
        this.setState({
          todos: [...this.state.todos.filter(t => t.id != itemId)]
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={containerStyles}>
        <Router>
          <NavBar />{" "}
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddItem onSubmitForm={this.handleSubmit} />
                <Todos
                  todos={this.state.todos}
                  onToggleComplete={this.handleToggleComplete}
                  onDelete={this.handleDelete}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about-us" component={About} />
        </Router>
      </div>
    );
  }
}

const containerStyles = {
  width: "500px",
  padding: "8px"
};

export default App;
