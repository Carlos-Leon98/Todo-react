import React from "react";

function EmptySearch(props) {
    return(
        <p>No hay resultados para {props.searchText}</p>
    )
}

export { EmptySearch };