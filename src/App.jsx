import React from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem'
import './App.css';

function App() {
	const [todoName, setTodoName] = React.useState("")
	const [todoNumber, setTodoNumber] = React.useState(0)
	const [isComplete, setComplete] = React.useState(false)

	const [todos, setTodos] = React.useState([])

	function addTodo(){   
	
    setTodoNumber(todoNumber + 1) 
    setComplete(false)
		setTodos([...todos, {todoName, todoNumber, isComplete}])
  }
  
  function delTodo(delNum){
	
    const filteredTodos = todos.filter((todo) => (
		todo.todoNumber !== delNum  
    ))
    setTodos(filteredTodos)
  }

  function markComplete(markNum){
	const markedTodo = todos.map((todo) => {
		if(todo.todoNumber === markNum) {
			todo.isComplete = !todo.isComplete
			return todo
		} else {
			return todo
		}
	})
	setTodos(markedTodo)
  }

    return (
		<div className="App" >
			<div style={{ background: 'lightblue' }}>
				<h1>Todo List </h1>
				<input value={todoName} placeholder="Add Todo" onChange={(e) => setTodoName(e.target.value)} />
			</div>
				<div style={{ display: 'flex', justifyContent: 'center', padding: '2px', background: 'lightblue'}}>
				<button style={{ padding: '5px 7px', backgroundColor: '#7CFC00', border: 'groove', borderRadius: 5 }} onClick={addTodo}>Add Todo</button>
				</div>				
				{
					todos.map((todo) => (
						<div style={{ padding: '5px 7px'}}>
						<TodoItem key={todo.todoNumber} isComplete={todo.isComplete} number={todo.todoNumber} todo={todo.todoName} del={delTodo} mark={markComplete}/>
						</div>
					))
				}				
		</div>
    );
}

export default App;
