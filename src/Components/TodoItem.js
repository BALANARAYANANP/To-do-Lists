import React, { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [editedTask, setEditedTask] = useState(todo.task); 

  
  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedTask); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <li>

      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className={todo.completed ? 'completed' : ''}>
            {todo.task}
          </span>
        </>
      )}

      <button onClick={handleEdit} style={{backgroundColor:"black"}}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
