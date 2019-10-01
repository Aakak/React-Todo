import React from "react";



const Todo = props => (
    <div className={`item${props.task.completed ? ' completed' : ''}`}
    onClick={() => props.toggleItem(props.task.id)}> 
        <h2 >{props.task.list}</h2>
    </div>
)

export default Todo;



