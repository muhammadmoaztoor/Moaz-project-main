// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1>Drop Me a Message Anytime</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={styles.input} required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" style={styles.input} required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" style={styles.textarea} required />
        <button type="submit" style={styles.button}>Send</button>
      </form>
      {submitted && <p style={{color:"#00bcd4"}}>Message sent successfully!</p>}
      <p style={{marginTop:"20px"}}>Gmail: eastonexpert@gmail.com</p>
      <p>Phone: 03237129229</p>
    </div>
  );
}

const styles = {
  container: { color: "white", textAlign: "center", padding: "20px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", maxWidth: "400px", margin: "0 auto" },
  input: { padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #00bcd4" },
  textarea: { padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #00bcd4", height: "100px" },
  button: { padding: "10px 15px", borderRadius: "5px", border: "none", background: "#00bcd4", color: "white", cursor: "pointer", marginTop: "10px" },
};
