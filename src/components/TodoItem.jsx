import React from 'react'

function TodoItem(props) {
    // const [todo, setTodo] = React.useState(this.todo)
    // const [markCompleted, setMarkCompleted] = React.useState(this.markCompleted)
    // console.log(props)

    // console.log(props.prop3)


return (
    <div style={{flex: 3, border: '1px solid black', width: '50%', padding: '2px', justifyContent: 'center'}}>
        <input type="checkbox" onChange={() => props.mark(props.number)}/>
        <h3 style={{ textDecoration: props.isComplete ? 'line-through' : ''}}>{props.todo}</h3>
        <button onClick={() => props.del(props.number)}>delete</button>
    </div>
);

}
export default TodoItem