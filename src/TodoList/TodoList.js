import React, { Component } from 'react'
import Todo from "../Todo/Todo" 
import "./TodoList.css"

class TodoList extends Component {


    render(){
        let todos=this.props.todos.map(todo=>(
            <Todo
                task={todo.task}
                index={todo.id}
                key={todo.id}
                modified={todo.modify}
                update={()=>this.props.updated(todo.id)}
                finish={()=>this.props.finished(todo.id)}
                remove={()=>this.props.removed(todo.id)}
                updateTodo={this.props.updatedTodo}
            >
                <p className={todo.checked? "Checked" : ""}>{todo.task}</p>
            </Todo>
        )
            
        )
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
