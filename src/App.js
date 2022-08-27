import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { TodoItem } from "./TodoItem.js";
import { TodoList } from "./TodoList.js";
// import logo from './logo.svg';
// import './App.css';

const todos = [
  { text: 'Cut Onions', completed: true },
  { text: 'Take React course', completed: false },
  { text: 'Cry because the depression', completed: false },
  { text: 'Dance', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton  /> 
    </React.Fragment>
  );
}

export default App;
