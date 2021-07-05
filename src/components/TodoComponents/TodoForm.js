import React from 'react';


class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        item: ''
      };
    }
  
    handleChanges = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    submitItem = e => {
      e.preventDefault();
      this.props.addNewTodo(this.state.item);
      this.setState({
          item: ""
      })
    };

    clearCompleted = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }
  
    
    render() {
      return (
        <div>
            <form onSubmit={this.submitItem}>
            <input
                type="text"
                value={this.state.item}
                name="item"
                onChange={this.handleChanges}
            />
            <button>Add</button>
            </form>
            <button onClick = {this.clearCompleted}> Delete Completed </button>
        </div>
      );
    }
  }

export default TodoForm;

