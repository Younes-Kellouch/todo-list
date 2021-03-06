import React, { Component } from 'react'
import TodoList from "../TodoList/TodoList"
import NewTodoForm from "../NewTodoForm/NewTodoForm"
import "./TodoListContainer.css"


const { v4: uuidv4 } = require('uuid');
class TodoListContainer extends Component {

    state={
        todos:[]
    }

    addTodo=(todo)=>{
        let newTodo={...todo,id:uuidv4(),modify:false,checked:false}
        this.setState( prevState =>(
            {
                todos:[...prevState.todos,newTodo] //Array that takes in all the exesting todos in the previous state and adding a new Todo
            }
        ))
    }

    updateTodo=(updatedTodo , id)=>{
        let updatedTodos=this.state.todos.map( todo =>{
            if(todo.id===id){
                console.log("from the Function : "+id);
                return {...todo, task:updatedTodo}
            }
            else{
                return todo;
            }
        })
        this.setState({
            todos:updatedTodos
        });
    }


    updateHandler=(id)=>{
        let todos=this.state.todos.map(todo=>{
            if(todo.id===id)
                return {...todo,modify:!todo.modify};
            
            else
                return todo;
        })

        this.setState({
            todos:todos
        })
    }

    removeHandler=(id)=>{
        this.setState({
            todos:this.state.todos.filter(todo=>todo.id !==id)
        })
    }

    finishHandler=(id)=>{
       let todos=this.state.todos.map(todo=>{
           if(todo.id===id)
               return {...todo,checked:!todo.checked};
           
           else
                return todo;
       })

       this.setState({
           todos:todos
       })
    }

    render() {
        return (
            <div className="TodoApp">
                    <TodoList
                        todos={this.state.todos}
                        changed={this.changeHandler}
                        updated={this.updateHandler}
                        removed={this.removeHandler}
                        finished={this.finishHandler}
                        updatedTodo={this.updateTodo}
                    />
                    <NewTodoForm 
                        createTodo={this.addTodo}
                    />
            </div>
        )
    }
}

export default TodoListContainer
