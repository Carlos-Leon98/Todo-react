import React from "react";
import AppUI from "./AppUI";
// import logo from './logo.svg';
// import './App.css';

// const defaultsTodos = [
//   { text: 'Cut Onions', completed: true },
//   { text: 'Take React course', completed: false },
//   { text: 'Cry because the depression', completed: false },
//   { text: 'Dance', completed: true },
// ]

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItems] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue; 
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItems(parsedItem);
        setLoading(false);
      } catch {
        setError(error)
      }
    }, 2000)
  });

  const saveItems = (newItems) => {
    const stringifyItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifyItems);
    setItems(newItems)
  }

  return {
    item, 
    saveItems,
    loading,
  };
}

function App() {
  const { item: todos, saveItems: saveTodos, loading } = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
