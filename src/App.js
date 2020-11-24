import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    getLocalTodosAndStatus();
  }, []);

  useEffect(() => {
    saveLocalTodosAndStatus();
  }, [todos, status]);

  const saveLocalTodosAndStatus = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("status", JSON.stringify(status));
  };

  const getLocalTodosAndStatus = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(todos))
      );
      setTodos(todoLocal);
    }
    if (localStorage.getItem("status") === null) {
      localStorage.setItem("status", JSON.stringify([]));
    } else {
      let statusLocal = JSON.parse(
        localStorage.getItem("status", JSON.stringify(status))
      );
      setStatus(statusLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Todo :</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        setStatus={setStatus}
        status={status}
        todos={todos}
        inputText={inputText}
      />
      <TodoList todos={todos} setTodos={setTodos} status={status} />
    </div>
  );
}

export default App;
