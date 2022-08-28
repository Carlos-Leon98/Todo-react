import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { TodoItem } from "./TodoItem.js";
import { TodoList } from "./TodoList.js";
// import logo from './logo.svg';
// import './App.css';

const defaultsTodos = [
  { text: 'Cut Onions', completed: true },
  { text: 'Take React course', completed: false },
  { text: 'Cry because the depression', completed: false },
  { text: 'Dance', completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaultsTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText)
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButton  /> 
    </React.Fragment>
  );
}

export default App;
