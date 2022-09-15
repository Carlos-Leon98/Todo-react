import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    const { addTodos, setOpenModal } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        event.preventDefault()
        addTodos(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add your TODO</label>
            <textarea 
                placeholder="Type your TODO task"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">
                    Cancel
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };