import React from 'react';
import {v4 as uuid} from 'uuid';
import '../styles/NewTodoForm.css';

class NewTodoForm extends React.Component {

  state = { task: ""}

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {...this.state, id: uuid(), completed: false};
    this.props.addTodo(newTodo);
    this.setState(()=>({task: ""}));
  };

  render() {
    return(
    <form 
      className="NewTodoForm"
      onSubmit={this.handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input 
        type="text"
        value={this.state.task}
        placeholder="New Todo"
        onChange={this.handleChange}
      />
      <button>ADD TODO</button>
    </form>
    )
  }
}

export default NewTodoForm;