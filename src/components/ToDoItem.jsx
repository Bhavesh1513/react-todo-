import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span className={todo.completed ? "completed-text" : ""} onClick={() => toggleComplete(todo.id)}>
          {todo.text}
        </span>
      )}
      <div className="buttons">
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
