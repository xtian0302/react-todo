import React from "react";

const Todo = ({ todo, handleComplete, handleDelete }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={() => handleComplete(todo.id)}>
        <i
          className={todo.completed === true ? "fas fa-times " : "fas fa-check"}
        ></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(todo)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
