import React, { Component } from 'react'
import TodoList from "../TodoList/TodoList"
import NewTodoForm from "../NewTodoForm/NewTodoForm"
import "./TodoListContainer.css"

class TodoListContainer extends Component {

    state={
        todos:[
                {text:"todo 1 after this",id:1,modify:false,checked:false},
                {text:"test 2",id:2,modify:false,checked:false},
                {text:"test 3",id:3,modify:false,checked:false},
                {text:"test 4",id:4,modify:false,checked:false}
        ]
    }

    addTodo=(evt)=>{
        this.setState( prevState =>(
            {
                todos:[...prevState.todos,evt.target.value]
            }
        ))
    }

    updateHandler=(id)=>{
        let todos=[...this.state.todos];
        let todo=todos.find(todo=>todo.id===id);
        const index=todos.findIndex(myTodo=>myTodo===todo);
        todo.modify=!todo.modify;
        todos[index]=todo;
        this.setState({
            todos:todos
        })
    }

    removeHandler=(id)=>{
        let todos=[...this.state.todos];
        let todo=todos.find(todo=>todo.id===id);
        const index=todos.findIndex(myTodo=>myTodo===todo);
        todos.splice(index,1);
        this.setState({
            todos:todos
        })
    }

    finishHandler=(id)=>{
        let todos=[...this.state.todos];
        let todo=todos.find(todo=>todo.id===id);
        const index = todos.findIndex(myTodo => myTodo===todo);
        todo.checked =!todo.checked;
        todos[index]=todo;
        this.setState({
            todos:todos
        })
    }

    render() {
        return (
            <div className="TodoApp">
                    <TodoList
                        todos={this.state.todos}
                        updated={this.updateHandler}
                        removed={this.removeHandler}
                        finished={this.finishHandler}
                    />
                    <NewTodoForm 
                        submit={this.addTodo}
                    />
            </div>
        )
    }
}

export default TodoListContainer
