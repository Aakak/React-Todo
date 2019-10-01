import React from "react";
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
  {
    list: '1. Javascript',
    id: 1246,
    completed: false
  },
  {
    list: '2. React',
    id: 1237,
    completed: false
  },
  {
    list: '3. Node',
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state =  {
      todoData,
      list: '',
      id: Date.now(),
      completed: false
    };
  }

  addTodo = event => {
    event.preventDefault()
      const newTodo = {
        list: this.state.list,
        id: this.state.id,
      }

    this.setState({todoData: [...this.state.todoData, newTodo]})
  }

  newTask = event => {
    this.setState({list: event.target.value})
  }

  render() {
    return (	   
      <div className="App">
          <h2>Welcome to your Todo App!</h2>
          <h3> Web Development Learning List: </h3>
         {this.state.todoData.map(newTaskList =>  (
             <TodoList newTaskList = {newTaskList} />))} 
         <TodoForm addTodo = {this.addTodo} newTask = {this.newTask}/>
      </div>	    
    );	   
  }	 
}
export default App;