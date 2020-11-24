import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, status }) => {
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  switch (status) {
    case "all":
      return (
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleComplete={handleComplete}
                  handleDelete={handleDelete}
                />
              );
            })}
          </ul>
        </div>
      );
    case "completed":
      return (
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => {
              if (todo.completed === true) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                  />
                );
              }
            })}
          </ul>
        </div>
      );
    case "uncompleted":
      return (
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo) => {
              if (todo.completed === false) {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                  />
                );
              }
            })}
          </ul>
        </div>
      );
    default:
      break;
  }
};

export default TodoList;
