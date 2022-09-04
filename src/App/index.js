import React from "react";
import { TodoProvider } from "../TodoContext";
import AppUI from "./AppUI";
// import logo from './logo.svg';
// import './App.css';

// const defaultsTodos = [
//   { text: 'Cut Onions', completed: true },
//   { text: 'Take React course', completed: false },
//   { text: 'Cry because the depression', completed: false },
//   { text: 'Dance', completed: true },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
