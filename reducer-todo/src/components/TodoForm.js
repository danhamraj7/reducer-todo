import React, { useState } from "react";

const TodoForm = ({ addTodo, filterCompleted }) => {
  const [newTodo, setNewTodo] = useState({ item: "" });

  const handleInputChange = e => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!newTodo.item.trim()) return;
    addTodo(newTodo);
    setNewTodo({ item: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="item"
          placeholder="Add Todo"
          value={newTodo.item}
        />

        <button type="submit">Add Todo</button>

        <button onClick={filterCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
