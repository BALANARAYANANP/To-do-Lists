import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import Header from './Components/Header';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // for filtering tasks
  const [priorityFilter, setPriorityFilter] = useState('all');

  
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };


  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    return !todo.completed;
  });

  return (
    <>  <Header/>
    <div className='App1'>
    <div className="app">
    
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} /> 
      
      <div str>
        <button onClick={() => setFilter('all')} style={{margin:"1rem", backgroundColor:"gray"}}>All</button>
        <button onClick={() => setFilter('completed')}  style={{margin:"1rem", backgroundColor:"green"}}>Completed</button>
        <button onClick={() => setFilter('incomplete')} style={{margin:"1rem"}}>Incomplete</button>
      </div>
   
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul></div>
    </div></>
  );
}

export default App;
