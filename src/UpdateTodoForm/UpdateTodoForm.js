import React, { Component } from 'react'
import "./UpdateTodoForm.css"

class UpdateTodoForm extends Component{

   
    state={
        task: this.props.task
    }

    changeHandler=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    submitHandler=(evt)=>{
        evt.preventDefault();
        this.props.update(this.state.task,this.props.index);
        this.props.clicked(); // makes the form disappair when we submit
    }

    render(){
            return(
            <form className="formModification" onSubmit={this.submitHandler}>
                <input type="text" name="task" value={this.state.task} autoComplete="off" onChange={this.changeHandler}/>
                <button>SAVE</button>
            </form>
        )
    }

}

export default UpdateTodoForm;