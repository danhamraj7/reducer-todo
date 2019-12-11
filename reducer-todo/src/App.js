import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todo => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const filterCompleted = id => {
    dispatch({ type: "FILTER_COMPLETED", payload: id });
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} filterCompleted={filterCompleted} />
      <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
