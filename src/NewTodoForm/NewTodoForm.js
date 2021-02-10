import React, { Component } from 'react'
import "./NewTodoForm.css"

class NewTodoForm extends Component {

    state={
        task:""
    }

    changeHandler=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    submitHandler=(evt)=>{
        evt.preventDefault();
        //let newTodo={...this.state}
        this.props.createTodo(this.state); //Passing our Task to a function of the parent component
        this.setState(
            {
                task:""             //initialising out State to an empty to string for the other Submit
            }
        )
    }

    render(){
        return(
            <form  className="Form" onSubmit={this.submitHandler}>
                <input type="text" placeholder="New Task" name="task" value={this.state.task} autoComplete="off" onChange={this.changeHandler}/>
                <button>
                    envoyer
                </button>
            </form>
        )
    }
    

}

export default NewTodoForm