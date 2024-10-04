import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task); // Pass priority when adding a todo
      setTask('');
     
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />

     

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
