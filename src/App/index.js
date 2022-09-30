import React from "react";
import { useTodos } from "./useTodos";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";

function App() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    addTodos,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue
  } = useTodos();
  
  return (
    <React.Fragment>
        <TodoHeader>
            <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>
            
        <TodoList>
            {error && <p>Something wrong</p>}
            {loading && <p>Loading</p>}
            {(!loading && !searchedTodos.length) && <p>Create your first TODO</p>}
            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed} 
                    onComplete={() => completeTodos(todo.text)}
                    onDelete={() => deleteTodos(todo.text)} />
            ))}
        </TodoList>

        {!!openModal && (
            <Modal>
                <TodoForm addTodos={addTodos} setOpenModal={setOpenModal} />
            </Modal>
        )}

        <CreateTodoButton  
            setOpenModal={setOpenModal}
        /> 
    </React.Fragment>
); 
}

export default App;
