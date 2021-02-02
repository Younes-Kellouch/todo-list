import React, { Component } from 'react'
import TodoList from "../TodoList/TodoList"
import NewTodoForm from "../NewTodoForm/NewTodoForm"
import "./TodoListContainer.css"

class TodoListContainer extends Component {

    state={
        todos:["test 1 ","test2","test3"]
    }

    addTodo=(evt)=>{
        this.setState( prevState =>(
            {
                todos:[...prevState.todos,evt.target.value]
            }
        ))
    }

    render() {
        return (
            <div className="TodoApp">
                    <TodoList todos={this.state.todos}/>
                    <NewTodoForm submit={this.addTodo}/>
            </div>
        )
    }
}

export default TodoListContainer
