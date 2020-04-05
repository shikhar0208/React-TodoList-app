import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import '../styles/TodoList.css';


class TodoList extends React.Component {

  state = {
    todos: []
  }

  addTodo = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, task: updatedTask}
      }
      else {
        return todo;
      }
    });
    this.setState(() => ({ todos: updatedTodos}))
  };

  toggleTodo = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      else {
        return todo;
      }
    });
    this.setState(() => ({ todos: updatedTodos}))
  };


  handleRemove = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => {
        return id !== todo.id;
      })
    }));
  }

  render() {
    const todo = this.state.todos.map((todo) => (
      <Todo 
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        updateTodo={this.updateTodo}
        toggleTodo={this.toggleTodo}
        handleRemove={this.handleRemove}
      />
    ))
    return (
      <div className="TodoList">
        <h1>  
          Todo List! <span>A Simple Todo List App.</span>
        </h1>
        <ul>{ todo }</ul>
        <NewTodoForm 
          addTodo={this.addTodo}
        />
      </div>
    );
  };
};

export default TodoList;