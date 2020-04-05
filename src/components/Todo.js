import React from "react";
import "../styles/Todo.css";

class Todo extends React.Component {
  state = {
    isEditing: false,
    task: this.props.task,
  };

  toggleForm = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  };

  handleToggle = (e) => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <div className="Todo">
            <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <button>Save</button>
            </form>
          </div>
        ) : (
          <div className="Todo">
            <li
              onClick={this.handleToggle}
              className={
                this.props.completed ? "Todo-task completed" : "Todo-task"
              }
            >
              {this.props.task}
            </li>
            <div className="Todo-buttons">
              <button onClick={this.toggleForm}>
                <i className="fas fa-pen" />
              </button>
              <button
                className="Todo-buttons"
                onClick={(e) => {
                  this.props.handleRemove(this.props.id);
                }}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Todo;
