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

class Todo extends Component {
  render() {
    return (
      <span className="todo">{this.props.name}</span>
    );
  }
}

class Todos extends Component {
  render() {
    var toDos = [{"name":"123"},{"name":"test"}];
    return (
      toDos.map(function (item) {
        return <li><Todo name= {item.name}/></li>
      })
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
