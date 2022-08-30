import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
  const onClickButton = (mgs) => alert(mgs);
    return(
      <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('You created a TODO')}
      >
        +
      </button>
    );
};

export { CreateTodoButton };