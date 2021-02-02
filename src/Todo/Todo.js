import React from 'react'
import "./Todo.css"

const todo=(props)=>{
    return (
        <div className="Todo">   
            <div className="Text">
                {props.children}
            </div>
            <div className="Buttons">
                <div className="Modifier pointer">
                    <i class="fas fa-pen"></i>  
                </div>
                <div className="Delete pointer">
                    <i class="fas fa-trash-alt"></i>
                </div>
                <div className="Done pointer"> 
                    <i class="fas fa-check"></i>
                </div>
            </div>
            
        </div>  
    )
}

export default todo