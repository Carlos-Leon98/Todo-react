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

// function App() {

//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

function App() {
  const [ state, setState ] = React.useState('Estado compartido');

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  )
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}

function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  )
}

function TodoCounter() {
  const [state] = React.useContext(TodoProvider);

  return <p>TodoCounter</p>
}

function TodoSearch() {
  return <p>TodoSearch</p>
}

function TodoItem({ state }) {
  return <p>TodoItems: {state}</p>
}

export default App;
