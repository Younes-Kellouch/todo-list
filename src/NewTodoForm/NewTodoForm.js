import React from 'react'
import "./NewTodoForm.css"

const newTodoForm =(props)=>{

    const submitHandler=(event)=>{
        event.prevenDefault();
        props.submit(event);
    }
   
    return(
        <form  className="Form" onSubmit={submitHandler}>
            <input type="text" name="todo" placeholder="New Task" autoComplete="off"/>
            <button>
                envoyer
            </button>
        </form>
    )

}

export default newTodoForm