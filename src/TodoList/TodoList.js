import React, { Component } from 'react'
import Todo from "../Todo/Todo" 
import "./TodoList.css"

class TodoList extends Component {
 
    render(){
      /*  let todos=this.props.todos.map(todoText=>{
            <Todo>
                {todoText}
            </Todo>
        })
        */
        return (
            <div className="TodoList">
                <h1>Your Dily Tasks</h1>
                <div className="Todos">
                   <Todo>
                       test1
                    </Todo> 
                    <Todo>
                       test2
                    </Todo> 
                    <Todo>
                       test3
                    </Todo>  
                 
                </div>
               
            </div>
        )
    }
}

export default TodoList
