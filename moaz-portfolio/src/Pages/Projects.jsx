// src/pages/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const projects = [
    { name: "To-Do App", route: "/todo", desc: "Add tasks with a live clock." },
    { name: "Calculator", route: "/calculator", desc: "Perform quick calculations easily." },
    { name: "Weather App", route: "/weather", desc: "Check real-time weather by city." },
  ];

  return (
    <div style={styles.container}>
      <h1>My Projects</h1>
      <div style={styles.grid}>
        {projects.map((proj) => (
          <div key={proj.name} style={styles.card}>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <button onClick={() => navigate(proj.route)} style={styles.button}>
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", color: "white", marginTop: "80px", padding: "20px" },
  grid: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" },
  card: {
    background: "#111",
    padding: "20px",
    width: "250px",
    borderRadius: "10px",
    border: "1px solid #00bcd4",
    boxShadow: "0 0 10px #00bcd4",
  },
  button: {
    background: "#00bcd4",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
