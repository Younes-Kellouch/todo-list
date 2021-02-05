import React from 'react'
import UpdateTodoForm from "../UpdateTodoForm/UpdateTodoForm"
import "./Todo.css"

const todo=(props)=>{
    return (
        <div className="Todo">
            {
            props.modified ? 
                <UpdateTodoForm 
                    task={props.task} 
                    update={props.updateTodo} 
                    index={props.index}
                    clicked={props.update}
                />
                :
                <div className="Task">{props.children}</div> 
            }   
          
            <div className="Buttons">
                <div className="Modifier pointer" onClick={props.update}>
                    <i className="fas fa-pen"></i>  
                </div>
                <div className="Delete pointer" onClick={props.remove}>
                    <i className="fas fa-trash-alt"></i>
                </div>
                <div className="Done pointer" onClick={props.finish}> 
                    <i className="fas fa-check"></i>
                </div>
            </div>
            
        </div>  
    )
}

export default todo