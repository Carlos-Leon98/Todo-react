import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";

function AppUI({
    error,
    loading,
    totalTodos,
    completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      deleteTodos,
}) {
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
            {error && <p>Se cago todo</p>}
            {loading && <p>Estamos cargando, no worries</p>}
            {(!loading && !searchedTodos.length) && <p>Crea to primer todo</p>}
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

export default AppUI;