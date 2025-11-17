import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Muhammad Moaz</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#eec01aff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: {
    color: "white",
    fontSize: "20px",
  },
  link: {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
