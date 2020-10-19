import React from 'react'

function TodoItem(props) {
    // const [todo, setTodo] = React.useState(this.todo)
    // const [markCompleted, setMarkCompleted] = React.useState(this.markCompleted)
    // console.log(props)

    // console.log(props.prop3)


return (
    <div style={{ border: '1px solid black', width: '80%', padding: '6px', margin: 'auto' , display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
        <input type="checkbox" onChange={() => props.mark(props.number)}/>
        <h3 style={{ textDecoration: props.isComplete ? 'line-through' : ''}}>{props.todo}</h3>       
        <button onClick={() => props.del(props.number)} style={{borderRadius: 15, backgroundColor: 'red', border: 'groove' }}>delete</button>      
    </div>
);

}
export default TodoItem