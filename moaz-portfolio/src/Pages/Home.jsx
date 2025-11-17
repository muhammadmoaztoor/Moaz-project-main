// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Hi, Muhammad Moaz 👋</h1>
      <p>Bachelor’s of Science (Computer Science) - Virtual University of Pakistan (2023–2028)</p>
      <p>Bs Education - University of Education Lahore</p>
      <p>Intermediate (FSc. Pre-Engineering) - GCT Colleges (2021)</p>
      <p>Matric (Computer Science) - Govt. Higher Secondary School Green Town Lahore (2019)</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    padding: "20px",
    color: "white",
  },
};
