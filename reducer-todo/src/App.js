import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Dan todo list</h1>
      <TodoForm />
    </div>
  );
}

export default App;
