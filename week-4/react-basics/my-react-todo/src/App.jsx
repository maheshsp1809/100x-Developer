import React from "react";

const TodoApp = () => {
  const addTodo = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const todoDiv = document.getElementById("todos");
    const todoItem = document.createElement("div");
    todoItem.innerHTML = `<strong>${title}</strong>: ${description}`;
    todoDiv.appendChild(todoItem);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
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
        <input type="text" id="title" style={{ padding: "5px" }} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Description:</label>
        <input type="text" id="description" style={{ padding: "5px" }} />
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
          display: "inline-flex",
        }}
      ></div>
    </div>
  );
};

export default TodoApp;
