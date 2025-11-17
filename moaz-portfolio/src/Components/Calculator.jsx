// src/components/Calculator.jsx
import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const calculate = () => setInput(eval(input).toString());
  const clear = () => setInput("");

  return (
    <div style={styles.container}>
      <h1>Smart Calculator</h1>
      <div style={styles.display}>{input || "0"}</div>
      <div style={styles.buttons}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) =>
          btn === "=" ? (
            <button key={btn} onClick={calculate} style={styles.equalButton}>{btn}</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)} style={/[/*\-+]/.test(btn) ? styles.operatorButton : styles.numberButton}>{btn}</button>
          )
        )}
        <button onClick={clear} style={styles.clearButton}>C</button>
      </div>
    </div>
  );
}

const styles = {
  container: { color: "white", textAlign: "center", padding: "20px" },
  display: { background: "#222", padding: "20px", fontSize: "2rem", borderRadius: "5px", marginBottom: "10px" },
  buttons: { display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "10px", justifyContent: "center" },
  numberButton: { background: "green", color: "white", padding: "15px", border: "none", borderRadius: "5px", cursor: "pointer" },
  operatorButton: { background: "red", color: "white", padding: "15px", border: "none", borderRadius: "5px", cursor: "pointer" },
  equalButton: { background: "#00bcd4", color: "white", padding: "15px", border: "none", borderRadius: "5px", gridColumn: "span 2", cursor: "pointer" },
  clearButton: { background: "orange", color: "white", padding: "15px", border: "none", borderRadius: "5px", gridColumn: "span 2", cursor: "pointer" },
};
