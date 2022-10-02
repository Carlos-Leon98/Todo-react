import React from "react";
import './TodoList.css'

function TodoList(props) {
    const renderFunction = props.children || props.render;

    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length && props.onEmptySearchResults(props.searchText))}

            {props.searchedTodos.map(renderFunction)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };