import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    if (newText.trim() === "") return; 
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app">
      <Header addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo} />
    </div>
  );
}

export default App;
