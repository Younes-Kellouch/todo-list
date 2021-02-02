import React, { Component } from "react";
import "./App.css";
import TodoListContainer from "./TodoListContainer/TodoListContainer"

class App extends Component {
  render() {
    return (
      <div className='App'>
          <TodoListContainer/>
      </div>
    );
  }
}

export default App;