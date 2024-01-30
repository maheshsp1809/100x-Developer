import React, { useState, useCallback } from "react";

const ReactToDo = () => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  const handleInputChange2 = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  const addTodo = () => {
    if (todo.trim() === "" || description.trim() === "") {
      return; // Do not add empty todos
    }

    setTodos([...todos, { title: todo, description: description }]);
    setTodo("");
    setDescription(""); // Clear input fields after adding todo
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ marginLeft: "60px", color: "blue" }}>TODO App</h1>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "60px" }}>Title:</label>
        <input
          type="text"
          id="title"
          style={{ padding: "5px" }}
          value={todo}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Description:</label>
        <input
          type="text"
          id="description"
          style={{ padding: "5px" }}
          value={description}
          onChange={handleInputChange2}
        />
      </div>
      <button
        onClick={addTodo}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add TODO
      </button>
      <span></span>
      <div
        id="todos"
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f8f8f8",
          display: "block",
          //   flexDirection: "column",
          alignItems: "center",
          textAlign: "left",
          maxHeight: "500px", // Set a maximum height or adjust as needed
          overflowY: "auto", // Enable vertical scroll if content exceeds the height
        }}
      >
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              <strong>{todo.title}</strong>: {todo.description}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ReactToDo;
