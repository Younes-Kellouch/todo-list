import React, { Component } from 'react'
import Todo from "../Todo/Todo" 
import "./TodoList.css"

class TodoList extends Component {

    render(){
        let todos=this.props.todos.map(todo=>(
            <Todo
                modified={todo.modify}
                update={()=>this.props.updated(todo.id)}
                finish={()=>this.props.finished(todo.id)}
                remove={()=>this.props.removed(todo.id)}
            >
                <p className={todo.checked? "Checked" : ""}>{todo.text}</p>
            </Todo>
        )
            
        )
          console.log(todos); 
        return (
            <div className="TodoList">
                <h1>Your Dily Tasks</h1>
                <div className="Todos">
                    {todos}
                </div>
               
            </div>
        )
    }
}

export default TodoList
