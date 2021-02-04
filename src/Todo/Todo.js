import React from 'react'
import "./Todo.css"

const todo=(props)=>{
    return (
        <div className="Todo">
            {props.modified ? 
                <form className="formModification">
                    <input type="text" name="todoText"/>
                    <button>SAVE</button>
                </form>:  
                <div className="Text">
                    {props.children}
                </div>    
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