import React from 'react';

const TodoForm = props => (

    <form>
        <input type ="text" onChange = {props.newTask} value = {props.list} placeholder="Add your list"/>
        <button onClick = {props.addTodo}> Add</button>
        <button> Delete Completed </button>
    </form>
)

export default TodoForm;

