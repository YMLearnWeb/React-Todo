import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

class InputTodo extends Component {
  render() {
    return (
      <div className="todo-input">
        <input className="todo-input-box" id="inputTodo" type="text" placeholder="the task" />
        <button className="todo-btn" type="button" onClick = {() => this.props.addItem(document.getElementById("inputTodo").value)}>Add</button>
      </div>
    )
  }
}

class Todo extends Component {
  render() {
    return (
        <div className="todo">
          <span className="todo-check"><input type="checkbox" className="todo-check-box check-box" onChange={e =>this.props.checkTodo(e)} /></span>
          <span className="todo-name">{this.props.name}</span>
          <button className="delBtn btn no-border" onClick = {() => this.props.delTodo()}>x</button>
        </div>
    );
  }
}

class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    }
    this.summaryTodoNum = 1;
    this.summaryTodo();
  }

  addTodo(todo) {
    const todos_ = this.state.todos;
    todos_.push({
      "name":todo,
      "finish":false
    })
    this.setState({
      todos: todos_
    })
  }

  removeTodo(todo) {
    const todos_ = this.state.todos;
    todos_.splice(todo,1);
    this.setState({
      todos: todos_
    })
    this.summaryTodo();
  }

  checkTodo(todo){
    const todos_ = this.state.todos;
    todos_[todo.key].finish = todo.e.target.checked;
    this.setState({
      todos: todos_
    })
    this.summaryTodo();
  }

  summaryTodo(){
    const finishTodos = this.state.todos.filter( todo => todo.finish === true);
    this.summaryTodoNum = finishTodos.length;
  }

  render() {
    const that = this;
    return (
      <div>
        <div className="todo-input-part">
          <InputTodo addItem = {item => this.addTodo(item)} />
        </div>
        <ul> 
          {
            this.state.todos.map(
              (i,key) =>
              {return <li key={key}><Todo name={i.name}  checkTodo={e => this.checkTodo({key,e})} delTodo = {() => this.removeTodo({key})} /></li>}
            )
          }
        </ul>
        <div className="summary">
          <span>Finish Tasks: </span>
          <span className="finishdone-num">{this.summaryTodoNum}</span>
        </div>
      </div>
    );
  }
} 

class TodoApp extends Component {
  render() {
    return (
      <div className="todo-main">
          <Todos />
      </div>
    );
  }
}

export default TodoApp;
