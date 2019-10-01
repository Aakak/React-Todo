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
      todos: todoData,
      id: 123
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          console.log("reverting " + item);
          return {
            ...item,
            // Same as:
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
            completed: !item.completed
          };
        } else {
          return item;
        }
      }), 
      id: this.state.id
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  addNewTodo = todoname => {
    const newTodo = {
      list: todoname,
      id: this.state.id,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      id: this.state.id + 1
    });
  };

  render() {
    return (	   
      <div className="App">
          <h2>Welcome to your Todo App!</h2>
          <h3> Web Development Learning List: </h3>
          <TodoList 
            tasksList={this.state.todos} 
            toggleItem={this.toggleItem}/>
         <TodoForm 
            addNewTodo = {this.addNewTodo} 
            clearCompleted = {this.clearCompleted} />
      </div>	    
    );	   
  }	 
}
export default App;