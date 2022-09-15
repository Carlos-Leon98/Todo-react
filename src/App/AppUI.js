import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";

function AppUI() {
    const { error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                
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
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton  
                setOpenModal={setOpenModal}
            /> 
        </React.Fragment>
    );
}

export default AppUI;