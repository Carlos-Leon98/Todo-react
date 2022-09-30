import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
    const { item: todos, saveItems: saveTodos, loading } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
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

    const addTodos = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text: text
      });
      saveTodos(newTodos);
    }

    return {
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        };
}
export { useTodos };