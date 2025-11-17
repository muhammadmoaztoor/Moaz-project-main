// src/components/TodoApp.jsx
import React, { useState, useEffect } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const clearAll = () => {
    setTasks([]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1>To-Do App</h1>
      <p style={styles.clock}>{time.toLocaleString()}</p>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          placeholder="Add a task..."
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
        <button onClick={clearAll} style={styles.clearButton}>
          Clear All
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              ...styles.taskItem,
              textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.6 : 1,
            }}
          >
            {task.text}
            <button onClick={() => toggleComplete(index)} style={styles.completeButton}>
              ✔️
            </button>
            <button onClick={() => removeTask(index)} style={styles.removeButton}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { color: "white", textAlign: "center", padding: "20px" },
  clock: { fontSize: "1.2rem", marginBottom: "10px" },
  inputContainer: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #00bcd4", width: "200px" },
  addButton: { padding: "10px 15px", borderRadius: "5px", border: "none", background: "#00bcd4", color: "white", cursor: "pointer" },
  clearButton: { padding: "10px 15px", borderRadius: "5px", border: "none", background: "#2196f3", color: "white", cursor: "pointer" },
  taskList: { listStyle: "none", padding: 0 },
  taskItem: { margin: "10px 0", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" },
  completeButton: { background: "green", color: "white", border: "none", borderRadius: "50%", cursor: "pointer", width: "25px", height: "25px" },
  removeButton: { background: "red", color: "white", border: "none", borderRadius: "50%", cursor: "pointer", width: "25px", height: "25px" },
};
